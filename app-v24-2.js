(() => {
  const PROFILE_KEY = 'expeditionFamilyProfileV1';
  const TRIAL_KEY = 'novaTrialV24';
  const GAME_PREFIX = 'novaCurriculumGameProgressV1:';
  const ENGAGEMENT_PREFIX = 'novaEngagementV24:';
  const SUBJECTS = {
    math: 'Matemáticas', language: 'Lenguaje', science: 'Ciencias', social: 'Sociales', english: 'Inglés'
  };
  const FOCUS = {
    numbers: 'números y cantidades', operations: 'operaciones', problems: 'problemas escritos'
  };

  function readJson(key) {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; }
  }

  function profile() { return readJson(PROFILE_KEY) || {}; }
  function childId() { return String(profile()?.childId || ''); }
  function trial() { const value = readJson(TRIAL_KEY); return value?.completed ? value : null; }
  function gameProgress() { const id = childId(); return id ? (readJson(`${GAME_PREFIX}${id}`) || {}) : {}; }
  function engagement() { const id = childId(); return id ? (readJson(`${ENGAGEMENT_PREFIX}${id}`) || { days:{} }) : { days:{} }; }

  function localDateKey(value = new Date()) {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function rate(item = {}) {
    if (Number.isFinite(Number(item.bestRate))) return Math.max(0, Math.min(1, Number(item.bestRate)));
    const total = Number(item.bestTotal || item.total || 0);
    return total > 0 ? Math.max(0, Math.min(1, Number(item.bestScore || 0) / total)) : 0;
  }

  function isMastered(item = {}) {
    return Boolean(item.mastered) || ((Boolean(item.masteryRoundCompleted) || Number(item.bestTotal || 0) >= 20) && rate(item) >= .8);
  }

  function streakFromDates(dates) {
    const set = new Set(dates.filter(Boolean));
    if (!set.size) return 0;
    let cursor = new Date();
    let streak = 0;
    if (!set.has(localDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
    while (set.has(localDateKey(cursor))) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  function summary() {
    const progress = gameProgress();
    const entries = Object.entries(progress);
    const diagnostic = trial();
    const eng = engagement();
    const dates = new Set();
    let challenges = 0;
    let mastered = 0;
    let xp = diagnostic ? 50 : 0;
    const subjects = new Set();

    entries.forEach(([key, item]) => {
      const bestTotal = Math.max(0, Number(item?.bestTotal || item?.total || 0));
      const bestScore = Math.max(0, Number(item?.bestScore || 0));
      challenges += bestTotal;
      xp += bestScore * 10;
      if (isMastered(item)) { mastered += 1; xp += 100; }
      const subject = String(key).split(':')[1];
      if (subject) subjects.add(subject);
      const date = localDateKey(item?.lastPlayedAt);
      if (date) dates.add(date);
    });
    if (diagnostic?.completedAt) dates.add(localDateKey(diagnostic.completedAt));
    Object.entries(eng.days || {}).forEach(([date, seconds]) => { if (Number(seconds) >= 30) dates.add(date); });

    const seconds = Object.values(eng.days || {}).reduce((acc, value) => acc + Math.max(0, Number(value) || 0), 0);
    const activeDays = dates.size;
    const streak = streakFromDates([...dates]);
    const inProgress = entries.filter(([, item]) => Number(item?.plays || 0) > 0 && !isMastered(item)).length;
    const badge = mastered >= 3 ? 'Dominio en marcha' : mastered >= 1 ? 'Primer dominio' : activeDays >= 3 ? 'Constancia' : diagnostic ? 'Explorador NOVA' : 'Primer paso';

    return { progress, diagnostic, challenges, mastered, inProgress, xp, subjects: subjects.size, activeDays, streak, minutes: Math.floor(seconds / 60), badge };
  }

  function recommendation(data = summary()) {
    const candidates = Object.entries(data.progress)
      .filter(([, item]) => Number(item?.plays || 0) > 0 && !isMastered(item))
      .sort((a, b) => rate(a[1]) - rate(b[1]));
    if (candidates.length) {
      const [key, item] = candidates[0];
      const subject = SUBJECTS[String(key).split(':')[1]] || 'su ruta';
      return `${subject} necesita otra práctica: el mejor resultado observado en ese tema es ${Math.round(rate(item) * 100)}%. NOVA lo priorizará antes de marcarlo como dominado.`;
    }
    if (data.diagnostic?.focus) {
      return `La prueba inicial sugiere empezar reforzando ${FOCUS[data.diagnostic.focus] || 'la habilidad con menor seguridad'}. La ruta irá ajustándose con las respuestas reales dentro de NOVA.`;
    }
    const title = String(document.querySelector('#continueLearningTitle')?.textContent || '').trim();
    if (title) return `La próxima acción recomendada es continuar con “${title}” para generar evidencia antes de cambiar de tema.`;
    return 'Completa una primera misión para que NOVA pueda recomendar el siguiente refuerzo con evidencia.';
  }

  function track(event, properties = {}) { window.NOVAAnalytics?.track?.(event, properties, 'app'); }
  function trackOnce(key, event, properties = {}) {
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, '1');
    } catch {}
    track(event, properties);
  }

  function setupRetentionStrip() {
    const home = document.querySelector('#learningHub');
    const grid = home?.querySelector('.v24-today-grid');
    if (!home || !grid || home.querySelector('.v242-retention-strip')) return;
    const data = summary();
    const strip = document.createElement('section');
    strip.className = 'v242-retention-strip';
    strip.innerHTML = `
      <div><small>RACHA</small><strong data-v242-streak>${data.streak} ${data.streak === 1 ? 'día' : 'días'}</strong></div>
      <div><small>XP</small><strong data-v242-xp>${data.xp.toLocaleString('es-CO')}</strong></div>
      <div><small>INSIGNIA</small><strong data-v242-badge>${data.badge}</strong></div>`;
    grid.insertAdjacentElement('afterend', strip);
    const label = home.querySelector('.v24-mission-label > span');
    if (label) label.textContent = 'NOVA RECOMIENDA';
  }

  function refreshRetentionStrip() {
    const data = summary();
    const streak = document.querySelector('[data-v242-streak]');
    const xp = document.querySelector('[data-v242-xp]');
    const badge = document.querySelector('[data-v242-badge]');
    if (streak) streak.textContent = `${data.streak} ${data.streak === 1 ? 'día' : 'días'}`;
    if (xp) xp.textContent = data.xp.toLocaleString('es-CO');
    if (badge) badge.textContent = data.badge;
  }

  function renderParentDashboard() {
    const modal = document.querySelector('#learningProgressModal .parent-progress-modal-card');
    const head = modal?.querySelector('.parent-progress-head');
    if (!modal || !head) return;
    let card = modal.querySelector('.v242-parent-summary');
    if (!card) {
      card = document.createElement('section');
      card.className = 'v242-parent-summary';
      head.insertAdjacentElement('afterend', card);
    }
    const data = summary();
    const name = String(profile()?.childName || 'Tu hijo');
    card.innerHTML = `
      <div class="v242-parent-title">
        <div><small>RESUMEN PARA LA FAMILIA</small><strong>${escapeHtml(name)} en NOVA</strong></div>
        <span>${data.badge}</span>
      </div>
      <div class="v242-parent-kpis">
        <div><strong>${data.activeDays}</strong><small>Días activos</small></div>
        <div><strong>${data.minutes}</strong><small>Minutos registrados</small></div>
        <div><strong>${data.challenges}</strong><small>Retos medidos</small></div>
        <div><strong>${data.mastered}</strong><small>Temas dominados</small></div>
      </div>
      <div class="v242-parent-detail">
        <span>${data.subjects} ${data.subjects === 1 ? 'materia trabajada' : 'materias trabajadas'}</span>
        <span>${data.inProgress} ${data.inProgress === 1 ? 'tema en refuerzo' : 'temas en refuerzo'}</span>
        <span>${data.xp.toLocaleString('es-CO')} XP</span>
        <span>Racha: ${data.streak} ${data.streak === 1 ? 'día' : 'días'}</span>
      </div>
      <div class="v242-parent-recommendation"><b>NOVA recomienda</b><p>${escapeHtml(recommendation(data))}</p></div>
      <p class="v242-measure-note">Los minutos se registran desde V24.2 mientras la experiencia de aprendizaje está activa. Los retos y dominios provienen del progreso guardado, no de una estimación.</p>`;
  }

  function setupParentDashboard() {
    const modal = document.querySelector('#learningProgressModal');
    if (!modal) return;
    renderParentDashboard();
    new MutationObserver(() => { if (!modal.hidden) renderParentDashboard(); }).observe(modal, { attributes:true, attributeFilter:['hidden'] });
  }

  function setupContextualPaywall() {
    const view = document.querySelector('#subscriberView');
    const action = view?.querySelector('.premium-action-column');
    if (!view || !action) return;
    const diagnostic = trial();
    if (diagnostic && !action.querySelector('.v242-paywall-evidence')) {
      const name = String(profile()?.childName || diagnostic.child || 'Tu hijo');
      const focus = FOCUS[diagnostic.focus] || 'su ruta escolar';
      const evidence = document.createElement('section');
      evidence.className = 'v242-paywall-evidence';
      evidence.innerHTML = `
        <small>SU PRIMERA EVIDENCIA</small>
        <strong>${escapeHtml(name)} ya completó 3 misiones</strong>
        <div><b>${Number(diagnostic.score) || 0}%</b><span>observado en la prueba inicial</span></div>
        <p>La primera ruta pondrá atención en ${escapeHtml(focus)}. Activa el plan para conservar este punto de partida y seguir midiendo su avance.</p>`;
      action.prepend(evidence);
    }
    const observe = () => { if (!view.hidden) trackOnce('nova:v242:paywall', 'paywall_viewed', { trialCompleted:Boolean(diagnostic), trialScore:Number(diagnostic?.score || 0) }); };
    observe();
    new MutationObserver(observe).observe(view, { attributes:true, attributeFilter:['hidden'] });
  }

  function setupFunnelAnalytics() {
    trackOnce('nova:v242:app-opened', 'app_opened');
    const auth = document.querySelector('#authForm');
    auth?.addEventListener('submit', () => {
      const signup = document.querySelector('#signupTabBtn')?.classList.contains('active');
      try { sessionStorage.setItem('nova:v242:pending-auth', signup ? 'signup' : 'login'); } catch {}
      if (signup) track('signup_started');
    }, true);

    const subscriber = document.querySelector('#subscriberView');
    if (subscriber) {
      const resolveAuth = () => {
        if (subscriber.hidden) return;
        let pending = '';
        try { pending = sessionStorage.getItem('nova:v242:pending-auth') || ''; } catch {}
        if (pending === 'signup') trackOnce('nova:v242:signup-completed', 'signup_completed');
        if (pending === 'login') trackOnce('nova:v242:login-completed', 'login_completed');
        try { sessionStorage.removeItem('nova:v242:pending-auth'); } catch {}
      };
      new MutationObserver(resolveAuth).observe(subscriber, { attributes:true, attributeFilter:['hidden'] });
      resolveAuth();
    }

    document.querySelector('#subscriptionForm')?.addEventListener('submit', () => {
      try { sessionStorage.setItem('nova:v242:checkout-pending', '1'); } catch {}
      track('checkout_started', { trialCompleted:Boolean(trial()) });
    }, true);

    const home = document.querySelector('#learningHub');
    if (home) {
      const onHome = () => {
        if (home.hidden) return;
        trackOnce('nova:v242:home-viewed', 'home_viewed', { streak:summary().streak, xp:summary().xp });
        let checkout = false;
        try { checkout = sessionStorage.getItem('nova:v242:checkout-pending') === '1'; } catch {}
        if (checkout) {
          trackOnce('nova:v242:subscription-activated', 'subscription_activated');
          try { sessionStorage.removeItem('nova:v242:checkout-pending'); } catch {}
        }
      };
      new MutationObserver(onHome).observe(home, { attributes:true, attributeFilter:['hidden'] });
      onHome();
    }

    document.querySelector('#novaGeneralForm')?.addEventListener('submit', () => track('nova_question_sent'), true);

    const game = document.querySelector('#curriculumGameModal');
    const finish = document.querySelector('#curriculumGameFinish');
    if (game) {
      new MutationObserver(() => {
        if (!game.hidden) track('curriculum_game_started');
      }).observe(game, { attributes:true, attributeFilter:['hidden'] });
    }
    if (finish) {
      new MutationObserver(() => {
        if (!finish.hidden) track('curriculum_game_completed');
      }).observe(finish, { attributes:true, attributeFilter:['hidden'] });
    }
  }

  function learningIsActive() {
    if (document.visibilityState !== 'visible') return false;
    const gate = document.querySelector('#accessGate');
    if (!gate || !gate.hidden) return false;
    const subscriber = document.querySelector('#subscriberView');
    return !subscriber || subscriber.hidden;
  }

  function recordEngagement(seconds = 15) {
    const id = childId();
    if (!id || !learningIsActive()) return;
    const key = `${ENGAGEMENT_PREFIX}${id}`;
    const data = readJson(key) || { days:{} };
    const day = localDateKey();
    data.days = data.days && typeof data.days === 'object' ? data.days : {};
    data.days[day] = Math.min(10800, Math.max(0, Number(data.days[day]) || 0) + seconds);
    data.updatedAt = new Date().toISOString();
    try { localStorage.setItem(key, JSON.stringify(data)); } catch {}
  }

  function setupEngagement() {
    window.setInterval(() => {
      recordEngagement(15);
      refreshRetentionStrip();
    }, 15000);
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  }

  function boot() {
    if (!document.querySelector('#learningHub')) return false;
    document.documentElement.dataset.novaVersion = '24.2';
    setupRetentionStrip();
    setupParentDashboard();
    setupContextualPaywall();
    setupFunnelAnalytics();
    setupEngagement();
    return true;
  }

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (boot() || attempts > 80) window.clearInterval(timer);
  }, 200);
})();
