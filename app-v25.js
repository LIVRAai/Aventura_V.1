(() => {
  const PROFILE_KEY = 'expeditionFamilyProfileV1';
  const TRIAL_KEY = 'novaTrialV24';
  const GAME_PREFIX = 'novaCurriculumGameProgressV1:';
  const ENGAGEMENT_PREFIX = 'novaEngagementV24:';
  const ADAPTIVE_PREFIX = 'novaAdaptiveProfileV25:';
  const CATALOG_PREFIX = 'novaTopicCatalogV25:';

  const SUBJECTS = {
    math: 'Matemáticas',
    language: 'Lenguaje',
    science: 'Ciencias',
    social: 'Sociales',
    english: 'Inglés'
  };
  const FOCUS = {
    numbers: 'números y cantidades',
    operations: 'operaciones',
    problems: 'problemas escritos'
  };
  const STATE_LABELS = {
    new: 'Nuevo',
    progress: 'En proceso',
    reinforce: 'Reforzar',
    mastered: 'Dominado'
  };

  let lastInputSignature = '';
  let lastSnapshot = null;
  let currentTopicTitle = '';
  let currentTopicOpenedAt = 0;

  function readJson(key) {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; }
  }

  function writeJson(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; }
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;'
    }[char]));
  }

  function normalize(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
  }

  function profile() { return readJson(PROFILE_KEY) || {}; }
  function childId() { return String(profile()?.childId || ''); }
  function gameProgress(id = childId()) { return id ? (readJson(`${GAME_PREFIX}${id}`) || {}) : {}; }
  function engagement(id = childId()) { return id ? (readJson(`${ENGAGEMENT_PREFIX}${id}`) || { days:{} }) : { days:{} }; }
  function trial() { const value = readJson(TRIAL_KEY); return value?.completed ? value : null; }
  function catalog(id = childId()) { return id ? (readJson(`${CATALOG_PREFIX}${id}`) || {}) : {}; }
  function previousAdaptive(id = childId()) { return id ? (readJson(`${ADAPTIVE_PREFIX}${id}`) || null) : null; }

  function clamp(value, min = 0, max = 1) {
    return Math.max(min, Math.min(max, Number(value) || 0));
  }

  function localDateKey(value = new Date()) {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function rollingWeekDates() {
    const out = [];
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    for (let i = 0; i < 7; i += 1) {
      out.push(localDateKey(d));
      d.setDate(d.getDate() - 1);
    }
    return out;
  }

  function rate(item = {}) {
    if (Number.isFinite(Number(item.bestRate))) return clamp(item.bestRate);
    const total = Number(item.bestTotal || item.total || 0);
    return total > 0 ? clamp(Number(item.bestScore || 0) / total) : 0;
  }

  function latestRate(item = {}) {
    const total = Number(item.latestTotal || 0);
    if (total > 0) return clamp(Number(item.latestScore || 0) / total);
    return rate(item);
  }

  function mastered(item = {}) {
    return Boolean(item.mastered)
      || ((Boolean(item.masteryRoundCompleted) || Number(item.bestTotal || 0) >= 20) && rate(item) >= .8);
  }

  function skillState(item = {}) {
    const plays = Number(item.plays || 0);
    if (mastered(item)) return 'mastered';
    if (!plays) return 'new';
    const observed = latestRate(item);
    if ((plays >= 2 && observed < .7) || (Number(item.latestTotal || 0) >= 20 && observed < .65)) return 'reinforce';
    return 'progress';
  }

  function parseSkillKey(key) {
    const parts = String(key || '').split(':');
    return {
      grade: Number(parts[0]) || 0,
      subject: parts[1] || '',
      topicId: parts.slice(2).join(':') || ''
    };
  }

  function streakFromDates(dates) {
    const set = new Set(dates.filter(Boolean));
    if (!set.size) return 0;
    let cursor = new Date();
    cursor.setHours(12, 0, 0, 0);
    let streak = 0;
    if (!set.has(localDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
    while (set.has(localDateKey(cursor))) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  function buildSkills(progress, labels) {
    return Object.entries(progress).map(([key, item]) => {
      const parsed = parseSkillKey(key);
      const state = skillState(item);
      return {
        key,
        grade: parsed.grade,
        subject: parsed.subject,
        subjectName: SUBJECTS[parsed.subject] || 'Ruta escolar',
        topicId: parsed.topicId,
        title: String(labels[key] || '').trim(),
        state,
        stateLabel: STATE_LABELS[state],
        plays: Math.max(0, Number(item?.plays || 0)),
        bestRate: rate(item),
        latestRate: latestRate(item),
        bestScore: Math.max(0, Number(item?.bestScore || 0)),
        bestTotal: Math.max(0, Number(item?.bestTotal || item?.total || 0)),
        lastPlayedAt: String(item?.lastPlayedAt || ''),
        mastered: state === 'mastered'
      };
    });
  }

  function recommendationFor(skills, diagnostic) {
    const reinforce = skills
      .filter(skill => skill.state === 'reinforce')
      .sort((a, b) => a.latestRate - b.latestRate || b.plays - a.plays)[0];
    if (reinforce) {
      const pct = Math.round(reinforce.latestRate * 100);
      return {
        type: 'reinforce',
        key: reinforce.key,
        subject: reinforce.subject,
        subjectName: reinforce.subjectName,
        topicId: reinforce.topicId,
        title: reinforce.title,
        state: reinforce.state,
        reason: `Conviene reforzar ${reinforce.title ? `“${reinforce.title}”` : `un tema de ${reinforce.subjectName}`} antes de avanzar. El desempeño más reciente fue ${pct}%.`
      };
    }

    const progress = skills
      .filter(skill => skill.state === 'progress')
      .sort((a, b) => a.latestRate - b.latestRate || Date.parse(a.lastPlayedAt || 0) - Date.parse(b.lastPlayedAt || 0))[0];
    if (progress) {
      const pct = Math.round(progress.latestRate * 100);
      return {
        type: 'continue',
        key: progress.key,
        subject: progress.subject,
        subjectName: progress.subjectName,
        topicId: progress.topicId,
        title: progress.title,
        state: progress.state,
        reason: `${progress.title ? `“${progress.title}”` : progress.subjectName} está en proceso (${pct}%). Otra práctica dará más evidencia antes de marcar dominio.`
      };
    }

    if (diagnostic?.focus) {
      return {
        type: 'diagnostic',
        key: '',
        subject: 'math',
        subjectName: SUBJECTS.math,
        topicId: '',
        title: FOCUS[diagnostic.focus] || '',
        state: 'new',
        reason: `La primera lectura sugiere comenzar por ${FOCUS[diagnostic.focus] || 'la habilidad con menor seguridad'}. La recomendación cambiará con el desempeño real.`
      };
    }

    return {
      type: 'explore',
      key: '',
      subject: '',
      subjectName: 'Ruta escolar',
      topicId: '',
      title: '',
      state: 'new',
      reason: 'Completa una primera actividad para que NOVA pueda priorizar el siguiente paso con evidencia.'
    };
  }

  function badgesFor({ masteredCount, activeDays, streak, xp, subjects }) {
    return [
      { id:'first-domain', label:'Primer dominio', unlocked: masteredCount >= 1 },
      { id:'steady-3', label:'Constancia', unlocked: activeDays >= 3 },
      { id:'streak-5', label:'Racha 5', unlocked: streak >= 5 },
      { id:'multi-subject', label:'Explorador integral', unlocked: subjects >= 3 },
      { id:'mastery-5', label:'5 dominios', unlocked: masteredCount >= 5 },
      { id:'xp-2500', label:'2.500 XP', unlocked: xp >= 2500 }
    ];
  }

  function computeSnapshot() {
    const id = childId();
    if (!id) return null;
    const progress = gameProgress(id);
    const eng = engagement(id);
    const diagnostic = trial();
    const labels = catalog(id);
    const skills = buildSkills(progress, labels);
    const week = new Set(rollingWeekDates());
    const activityDates = new Set();
    let challenges = 0;
    let xp = diagnostic ? 50 : 0;
    const workedSubjects = new Set();

    skills.forEach(skill => {
      challenges += skill.bestTotal;
      xp += skill.bestScore * 10;
      if (skill.mastered) xp += 100;
      if (skill.subject) workedSubjects.add(skill.subject);
      const date = localDateKey(skill.lastPlayedAt);
      if (date) activityDates.add(date);
    });
    if (diagnostic?.completedAt) activityDates.add(localDateKey(diagnostic.completedAt));
    Object.entries(eng.days || {}).forEach(([date, seconds]) => {
      if (Number(seconds) >= 30) activityDates.add(date);
    });

    const seconds = Object.values(eng.days || {}).reduce((sum, value) => sum + Math.max(0, Number(value) || 0), 0);
    const weekSeconds = Object.entries(eng.days || {}).reduce((sum, [date, value]) => week.has(date) ? sum + Math.max(0, Number(value) || 0) : sum, 0);
    const weekDays = [...activityDates].filter(date => week.has(date)).length;
    const masteredActiveWeek = skills.filter(skill => skill.mastered && week.has(localDateKey(skill.lastPlayedAt))).length;
    const masteredCount = skills.filter(skill => skill.state === 'mastered').length;
    const reinforceCount = skills.filter(skill => skill.state === 'reinforce').length;
    const progressCount = skills.filter(skill => skill.state === 'progress').length;
    const streak = streakFromDates([...activityDates]);
    const activeDays = activityDates.size;
    const minutes = Math.floor(seconds / 60);
    const level = Math.max(1, Math.floor(xp / 500) + 1);
    const recommendation = recommendationFor(skills, diagnostic);
    const badges = badgesFor({ masteredCount, activeDays, streak, xp, subjects: workedSubjects.size });
    const weekly = {
      days: weekDays,
      targetDays: 4,
      minutes: Math.floor(weekSeconds / 60),
      targetMinutes: 60,
      masteryActive: masteredActiveWeek,
      targetMastery: 2
    };

    const skillMap = Object.fromEntries(skills.map(skill => [skill.key, {
      state: skill.state,
      rate: Number(skill.bestRate.toFixed(4)),
      latestRate: Number(skill.latestRate.toFixed(4)),
      plays: skill.plays,
      mastered: skill.mastered,
      subject: skill.subject,
      topicId: skill.topicId,
      title: skill.title,
      lastPlayedAt: skill.lastPlayedAt
    }]));

    return {
      version: 25,
      childId: id,
      updatedAt: new Date().toISOString(),
      skills: skillMap,
      summary: {
        challenges,
        mastered: masteredCount,
        reinforce: reinforceCount,
        progress: progressCount,
        xp,
        level,
        activeDays,
        streak,
        minutes,
        subjects: workedSubjects.size
      },
      weekly,
      badges,
      recommendation,
      diagnosticFocus: diagnostic?.focus || ''
    };
  }

  function materialSignature(snapshot) {
    if (!snapshot) return '';
    return JSON.stringify({
      skills: snapshot.skills,
      summary: snapshot.summary,
      weekly: snapshot.weekly,
      badges: snapshot.badges.map(item => [item.id, item.unlocked]),
      recommendation: snapshot.recommendation,
      diagnosticFocus: snapshot.diagnosticFocus
    });
  }

  function track(event, properties = {}) {
    window.NOVAAnalytics?.track?.(event, properties, 'app');
  }

  function trackOnce(key, event, properties = {}) {
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
    } catch {}
    track(event, properties);
  }

  function emitSkillTransitions(previous, next) {
    if (!previous?.skills || !next?.skills) return;
    for (const [key, skill] of Object.entries(next.skills)) {
      const before = previous.skills[key];
      if (!before || before.state === skill.state) continue;
      const parsed = parseSkillKey(key);
      track('skill_state_changed', {
        from: before.state,
        to: skill.state,
        grade: parsed.grade,
        subject: parsed.subject,
        rate: Math.round(Number(skill.latestRate || skill.rate || 0) * 100)
      });
    }

    const oldBadges = new Set((previous.badges || []).filter(item => item.unlocked).map(item => item.id));
    (next.badges || []).filter(item => item.unlocked && !oldBadges.has(item.id)).forEach(item => {
      track('badge_unlocked', { badge: item.id, label: item.label });
    });
  }

  function persist(snapshot) {
    if (!snapshot) return;
    const key = `${ADAPTIVE_PREFIX}${snapshot.childId}`;
    const previous = previousAdaptive(snapshot.childId);
    const signature = materialSignature(snapshot);
    if (previous?._signature === signature) return;
    emitSkillTransitions(previous, snapshot);
    const stored = { ...snapshot, _signature: signature };
    writeJson(key, stored);
    lastSnapshot = stored;
    trackOnce('nova:v25:adaptive-profile', 'adaptive_profile_updated', {
      mastered: snapshot.summary.mastered,
      reinforce: snapshot.summary.reinforce,
      progress: snapshot.summary.progress,
      level: snapshot.summary.level
    });
    window.dispatchEvent(new CustomEvent('nova:v25:updated', { detail: snapshot }));
  }

  function recommendationTitle(rec) {
    if (!rec) return 'Generar primera evidencia';
    if (rec.title) return rec.title;
    if (rec.type === 'diagnostic') return `Empezar por ${rec.title || 'la primera habilidad'}`;
    if (rec.subjectName) return rec.subjectName;
    return 'Continuar aprendiendo';
  }

  function renderHome(snapshot) {
    const home = document.querySelector('#learningHub');
    if (!home || !snapshot) return;
    const anchor = home.querySelector('.v242-retention-strip') || home.querySelector('.v24-today-grid');
    if (!anchor) return;

    let card = home.querySelector('.v25-adaptive-card');
    if (!card) {
      card = document.createElement('section');
      card.className = 'v25-adaptive-card';
      card.setAttribute('aria-label', 'Ruta adaptativa de NOVA');
      anchor.insertAdjacentElement('afterend', card);
    }

    const rec = snapshot.recommendation;
    const state = STATE_LABELS[rec?.state] || 'Siguiente paso';
    const unlocked = snapshot.badges.filter(item => item.unlocked).slice(-3);
    const dayPct = Math.min(100, Math.round(snapshot.weekly.days / snapshot.weekly.targetDays * 100));
    const minutePct = Math.min(100, Math.round(snapshot.weekly.minutes / snapshot.weekly.targetMinutes * 100));
    const masteryPct = Math.min(100, Math.round(snapshot.weekly.masteryActive / snapshot.weekly.targetMastery * 100));

    card.innerHTML = `
      <div class="v25-adaptive-head">
        <div>
          <small>RUTA ADAPTATIVA · NIVEL ${snapshot.summary.level}</small>
          <h2>Lo siguiente que conviene practicar</h2>
        </div>
        <span class="v25-state v25-state-${escapeHtml(rec?.state || 'new')}">${escapeHtml(state)}</span>
      </div>
      <div class="v25-adaptive-main">
        <div>
          <b>${escapeHtml(rec?.subjectName || 'NOVA')}</b>
          <strong>${escapeHtml(recommendationTitle(rec))}</strong>
          <p>${escapeHtml(rec?.reason || '')}</p>
        </div>
        <button type="button" class="v25-recommendation-btn">Continuar recomendación</button>
      </div>
      <div class="v25-weekly" aria-label="Meta semanal">
        <div class="v25-weekly-title"><span>META SEMANAL</span><b>${snapshot.weekly.days}/${snapshot.weekly.targetDays} días · ${snapshot.weekly.minutes}/${snapshot.weekly.targetMinutes} min</b></div>
        <div class="v25-goal"><span>Días de práctica</span><i><em style="width:${dayPct}%"></em></i><b>${dayPct}%</b></div>
        <div class="v25-goal"><span>Tiempo de práctica</span><i><em style="width:${minutePct}%"></em></i><b>${minutePct}%</b></div>
        <div class="v25-goal"><span>Dominios activos</span><i><em style="width:${masteryPct}%"></em></i><b>${snapshot.weekly.masteryActive}/${snapshot.weekly.targetMastery}</b></div>
      </div>
      <div class="v25-badges">
        <span>LOGROS</span>
        ${unlocked.length ? unlocked.map(item => `<b>✓ ${escapeHtml(item.label)}</b>`).join('') : '<b class="muted">Tu primer logro aparecerá aquí</b>'}
      </div>`;

    card.querySelector('.v25-recommendation-btn')?.addEventListener('click', () => openRecommendation(rec));
    trackOnce('nova:v25:recommendation-view', 'adaptive_recommendation_viewed', {
      type: rec?.type || 'explore',
      subject: rec?.subject || '',
      state: rec?.state || 'new'
    });
  }

  function renderRetention(snapshot) {
    const strip = document.querySelector('.v242-retention-strip');
    if (!strip || !snapshot) return;
    let level = strip.querySelector('[data-v25-level-wrap]');
    if (!level) {
      level = document.createElement('div');
      level.setAttribute('data-v25-level-wrap', '');
      level.innerHTML = '<small>NIVEL</small><strong data-v25-level></strong>';
      strip.appendChild(level);
    }
    const target = level.querySelector('[data-v25-level]');
    if (target) target.textContent = String(snapshot.summary.level);
  }

  function renderParent(snapshot) {
    const modal = document.querySelector('#learningProgressModal .parent-progress-modal-card');
    if (!modal || !snapshot) return;
    const v242 = modal.querySelector('.v242-parent-summary');
    const anchor = v242 || modal.querySelector('.parent-progress-head');
    if (!anchor) return;

    let card = modal.querySelector('.v25-family-intelligence');
    if (!card) {
      card = document.createElement('section');
      card.className = 'v25-family-intelligence';
      anchor.insertAdjacentElement('afterend', card);
    }

    const rec = snapshot.recommendation;
    const child = String(profile()?.childName || 'Tu hijo');
    const weekStatus = snapshot.weekly.days >= snapshot.weekly.targetDays && snapshot.weekly.minutes >= snapshot.weekly.targetMinutes
      ? 'Meta semanal alcanzada'
      : 'Meta semanal en curso';

    card.innerHTML = `
      <div class="v25-family-head">
        <div><small>LECTURA PEDAGÓGICA V25</small><strong>${escapeHtml(child)} · ${escapeHtml(weekStatus)}</strong></div>
        <span>Nivel ${snapshot.summary.level}</span>
      </div>
      <div class="v25-family-states">
        <div class="mastered"><strong>${snapshot.summary.mastered}</strong><small>Dominados</small></div>
        <div class="progress"><strong>${snapshot.summary.progress}</strong><small>En proceso</small></div>
        <div class="reinforce"><strong>${snapshot.summary.reinforce}</strong><small>Por reforzar</small></div>
      </div>
      <div class="v25-family-week">
        <b>Esta semana</b>
        <p>${snapshot.weekly.days} días de práctica · ${snapshot.weekly.minutes} minutos registrados · ${snapshot.weekly.masteryActive} ${snapshot.weekly.masteryActive === 1 ? 'dominio trabajado' : 'dominios trabajados'}.</p>
      </div>
      <div class="v25-family-next">
        <b>Siguiente recomendación</b>
        <strong>${escapeHtml(recommendationTitle(rec))}</strong>
        <p>${escapeHtml(rec?.reason || '')}</p>
      </div>
      <p class="v25-family-note">Los estados se calculan con respuestas, intentos y evidencia guardada. No representan una calificación escolar ni un diagnóstico clínico.</p>`;

    trackOnce('nova:v25:parent-summary', 'parent_summary_viewed', {
      mastered: snapshot.summary.mastered,
      reinforce: snapshot.summary.reinforce,
      weekDays: snapshot.weekly.days,
      weekMinutes: snapshot.weekly.minutes
    });
  }

  function findButtonByText(selector, text) {
    const target = normalize(text);
    if (!target) return null;
    return [...document.querySelectorAll(selector)].find(el => normalize(el.textContent).includes(target)) || null;
  }

  function openRecommendation(rec) {
    track('adaptive_recommendation_started', {
      type: rec?.type || 'explore',
      subject: rec?.subject || '',
      state: rec?.state || 'new'
    });

    if (!rec?.subject) {
      document.querySelector('#continueLearningBtn')?.click();
      return;
    }

    const subjectName = SUBJECTS[rec.subject] || rec.subjectName;
    const subjectButton = document.querySelector(`.curriculum-subject-btn[data-subject="${CSS.escape(rec.subject)}"]`)
      || findButtonByText('.curriculum-subject-btn', subjectName);

    if (!subjectButton) {
      document.querySelector('#continueLearningBtn')?.click();
      return;
    }

    subjectButton.click();
    window.setTimeout(() => {
      if (rec.title) {
        const topic = findButtonByText('.curriculum-topic-card', rec.title);
        if (topic) {
          topic.click();
          return;
        }
      }
      const hub = document.querySelector('#curriculumSubjectHub');
      hub?.scrollIntoView({ block:'start', behavior:'smooth' });
    }, 180);
  }

  function captureTopicCatalog() {
    const modal = document.querySelector('#curriculumGameModal');
    const titleEl = document.querySelector('#curriculumGameTitle');
    if (!modal || !titleEl) return;

    const onState = () => {
      if (!modal.hidden) {
        currentTopicTitle = String(titleEl.textContent || '').trim();
        currentTopicOpenedAt = Date.now();
        return;
      }
      if (!currentTopicTitle || !currentTopicOpenedAt || Date.now() - currentTopicOpenedAt > 20 * 60 * 1000) return;
      const id = childId();
      if (!id) return;
      const entries = Object.entries(gameProgress(id)).sort((a, b) => Date.parse(b[1]?.lastPlayedAt || 0) - Date.parse(a[1]?.lastPlayedAt || 0));
      const [key, item] = entries[0] || [];
      const playedAt = Date.parse(item?.lastPlayedAt || 0);
      if (!key || !playedAt || Math.abs(playedAt - currentTopicOpenedAt) > 20 * 60 * 1000) return;
      const labels = catalog(id);
      if (labels[key] !== currentTopicTitle) {
        labels[key] = currentTopicTitle;
        writeJson(`${CATALOG_PREFIX}${id}`, labels);
      }
      currentTopicTitle = '';
      currentTopicOpenedAt = 0;
    };

    new MutationObserver(onState).observe(modal, { attributes:true, attributeFilter:['hidden'] });
    new MutationObserver(() => { if (!modal.hidden) currentTopicTitle = String(titleEl.textContent || '').trim(); }).observe(titleEl, { childList:true, subtree:true, characterData:true });
    onState();
  }

  function fixDirectAuthAnalytics() {
    const home = document.querySelector('#learningHub');
    if (!home) return;
    const resolve = () => {
      if (home.hidden) return;
      let pending = '';
      try { pending = sessionStorage.getItem('nova:v242:pending-auth') || ''; } catch {}
      if (pending === 'login') trackOnce('nova:v25:login-completed', 'login_completed', { route:'direct_home' });
      if (pending === 'signup') trackOnce('nova:v25:signup-completed', 'signup_completed', { route:'direct_home' });
      if (pending) {
        try { sessionStorage.removeItem('nova:v242:pending-auth'); } catch {}
      }
    };
    new MutationObserver(resolve).observe(home, { attributes:true, attributeFilter:['hidden'] });
    resolve();
  }

  function inputSignature() {
    const id = childId();
    if (!id) return '';
    return JSON.stringify({
      id,
      game: gameProgress(id),
      engagement: engagement(id),
      trial: trial(),
      catalog: catalog(id)
    });
  }

  function refresh(force = false) {
    const sig = inputSignature();
    if (!sig) return;
    if (!force && sig === lastInputSignature) return;
    lastInputSignature = sig;
    const snapshot = computeSnapshot();
    if (!snapshot) return;
    persist(snapshot);
    lastSnapshot = previousAdaptive(snapshot.childId) || snapshot;
    renderHome(lastSnapshot);
    renderRetention(lastSnapshot);
    renderParent(lastSnapshot);
  }

  function setupObservers() {
    const home = document.querySelector('#learningHub');
    const parent = document.querySelector('#learningProgressModal');
    if (home) new MutationObserver(() => { if (!home.hidden) refresh(true); }).observe(home, { attributes:true, attributeFilter:['hidden'] });
    if (parent) new MutationObserver(() => { if (!parent.hidden) refresh(true); }).observe(parent, { attributes:true, attributeFilter:['hidden'] });
    window.addEventListener('storage', () => refresh(true));
    window.addEventListener('nova:v25:updated', event => {
      if (!event.detail) return;
      renderHome(event.detail);
      renderRetention(event.detail);
      renderParent(event.detail);
    });
  }

  function boot() {
    if (!document.querySelector('#learningHub')) return false;
    document.documentElement.dataset.novaVersion = '25.0';
    captureTopicCatalog();
    fixDirectAuthAnalytics();
    setupObservers();
    refresh(true);
    window.setInterval(() => refresh(false), 1500);
    return true;
  }

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (boot() || attempts > 100) window.clearInterval(timer);
  }, 150);
})();
