(() => {
  const CURRICULUM_GRADE_PREFIX = 'novaCurriculumGradeV1:';
  const CURRICULUM_ACTIVITY_PREFIX = 'novaCurriculumActivityV1:';
  const CURRICULUM_GAME_PREFIX = 'novaCurriculumGameProgressV1:';
  const CURRICULUM_META_PREFIX = 'novaCurriculumLocalUpdatedAtV1:';
  const TRIAL_KEY = 'novaTrialV24';
  let suppressProgressTracking = false;
  let cloudConfig = null;
  let cachedCloudContext = null;

  installProgressTracker();
  prepareCurriculumCloud()
    .catch((error) => console.warn('NOVA curriculum hydrate skipped:', error?.message || error))
    .finally(loadLegacyApp);

  function loadLegacyApp() {
    const legacy = document.createElement('script');
    legacy.src = '/app-legacy.js';
    legacy.async = false;
    legacy.onload = () => window.setTimeout(initV24, 0);
    legacy.onerror = () => console.error('No fue posible cargar la experiencia base de NOVA.');
    document.body.appendChild(legacy);
  }

  function installProgressTracker() {
    const nativeSetItem = Storage.prototype.setItem;
    if (Storage.prototype.__novaV24Tracked) return;

    Object.defineProperty(Storage.prototype, '__novaV24Tracked', { value: true, configurable: true });
    Storage.prototype.setItem = function(key, value) {
      nativeSetItem.call(this, key, value);
      if (suppressProgressTracking || this !== window.localStorage || typeof key !== 'string') return;
      if (![CURRICULUM_GRADE_PREFIX, CURRICULUM_ACTIVITY_PREFIX, CURRICULUM_GAME_PREFIX].some(prefix => key.startsWith(prefix))) return;
      const childId = key.split(':').pop();
      if (!childId) return;
      nativeSetItem.call(this, `${CURRICULUM_META_PREFIX}${childId}`, new Date().toISOString());
    };
  }

  function readJson(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || 'null');
      return value && typeof value === 'object' ? value : null;
    } catch { return null; }
  }

  function normalizedName(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
  }

  function authSessionFromStorage(projectRef) {
    const stored = readJson(`sb-${projectRef}-auth-token`);
    if (stored?.access_token) return stored;
    if (stored?.currentSession?.access_token) return stored.currentSession;
    return null;
  }

  function jwtSub(token) {
    try {
      const part = String(token || '').split('.')[1];
      if (!part) return '';
      const normalized = part.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(part.length / 4) * 4, '=');
      const binary = atob(normalized);
      const json = decodeURIComponent(Array.from(binary).map(ch => `%${ch.charCodeAt(0).toString(16).padStart(2, '0')}`).join(''));
      return String(JSON.parse(json)?.sub || '');
    } catch { return ''; }
  }

  async function getCloudContext() {
    if (!window.supabase?.createClient) return null;
    if (!cloudConfig) {
      const response = await fetch('/api/public-config', { cache: 'no-store' });
      if (!response.ok) return null;
      cloudConfig = await response.json();
    }

    const url = String(cloudConfig?.supabase?.url || '').trim();
    const key = String(cloudConfig?.supabase?.publishableKey || '').trim();
    if (!url || !key) return null;
    const projectRef = new URL(url).hostname.split('.')[0];
    const session = authSessionFromStorage(projectRef);
    if (!session?.access_token) return null;
    const userId = jwtSub(session.access_token);
    if (!userId) return null;

    if (cachedCloudContext?.token === session.access_token) return cachedCloudContext;
    const client = window.supabase.createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
      global: { headers: { Authorization: `Bearer ${session.access_token}` } }
    });
    cachedCloudContext = { client, userId, token: session.access_token };
    return cachedCloudContext;
  }

  async function activeCloudChild(ctx) {
    const { data, error } = await ctx.client
      .from('children')
      .select('id,name,parent_id,created_at')
      .eq('parent_id', ctx.userId)
      .eq('is_active', true)
      .order('created_at', { ascending: true })
      .limit(1);
    if (error) throw error;
    return Array.isArray(data) ? data[0] || null : null;
  }

  function captureCurriculumLocal(userId, child) {
    const gradeKey = `${CURRICULUM_GRADE_PREFIX}${userId}:${child.id}`;
    const activityKey = `${CURRICULUM_ACTIVITY_PREFIX}${userId}:${child.id}`;
    const gameKey = `${CURRICULUM_GAME_PREFIX}${child.id}`;
    const grade = Number(localStorage.getItem(gradeKey) || 0);
    const activity = readJson(activityKey) || { started: {} };
    const gameProgress = readJson(gameKey) || {};
    const trial = readJson(TRIAL_KEY);
    const diagnostic = trial?.completed && normalizedName(trial.child) === normalizedName(child.name) ? trial : null;
    const metaStamp = localStorage.getItem(`${CURRICULUM_META_PREFIX}${child.id}`) || '';

    let latest = Date.parse(metaStamp) || 0;
    Object.values(gameProgress).forEach(item => {
      latest = Math.max(latest, Date.parse(item?.lastPlayedAt || '') || 0);
    });
    latest = Math.max(latest, Date.parse(diagnostic?.completedAt || '') || 0);

    const hasContent = (grade >= 1 && grade <= 5)
      || Object.keys(activity?.started || {}).length > 0
      || Object.keys(gameProgress).length > 0
      || Boolean(diagnostic);

    return {
      gradeKey, activityKey, gameKey,
      hasContent,
      updatedAtMs: latest,
      state: {
        version: 1,
        grade: grade >= 1 && grade <= 5 ? grade : 0,
        activity,
        gameProgress,
        diagnostic
      }
    };
  }

  function applyRemoteCurriculum(userId, child, remoteState, remoteUpdatedAt) {
    if (!remoteState || typeof remoteState !== 'object') return;
    const gradeKey = `${CURRICULUM_GRADE_PREFIX}${userId}:${child.id}`;
    const activityKey = `${CURRICULUM_ACTIVITY_PREFIX}${userId}:${child.id}`;
    const gameKey = `${CURRICULUM_GAME_PREFIX}${child.id}`;
    suppressProgressTracking = true;
    try {
      if (Number(remoteState.grade) >= 1 && Number(remoteState.grade) <= 5) {
        localStorage.setItem(gradeKey, String(Number(remoteState.grade)));
      }
      if (remoteState.activity && typeof remoteState.activity === 'object') {
        localStorage.setItem(activityKey, JSON.stringify(remoteState.activity));
      }
      if (remoteState.gameProgress && typeof remoteState.gameProgress === 'object') {
        localStorage.setItem(gameKey, JSON.stringify(remoteState.gameProgress));
      }
      if (remoteState.diagnostic && typeof remoteState.diagnostic === 'object') {
        localStorage.setItem(TRIAL_KEY, JSON.stringify(remoteState.diagnostic));
      }
      if (remoteUpdatedAt) localStorage.setItem(`${CURRICULUM_META_PREFIX}${child.id}`, remoteUpdatedAt);
    } finally {
      suppressProgressTracking = false;
    }
  }

  async function prepareCurriculumCloud() {
    const ctx = await getCloudContext();
    if (!ctx) return;
    const child = await activeCloudChild(ctx);
    if (!child) return;

    const local = captureCurriculumLocal(ctx.userId, child);
    const { data: remote, error } = await ctx.client
      .from('child_progress')
      .select('child_id,curriculum_state,updated_at')
      .eq('child_id', child.id)
      .maybeSingle();
    if (error) throw error;

    const remoteState = remote?.curriculum_state && typeof remote.curriculum_state === 'object' ? remote.curriculum_state : {};
    const remoteHas = Object.keys(remoteState).length > 0;
    const remoteUpdatedMs = Date.parse(remote?.updated_at || '') || 0;

    if (!remote) {
      if (!local.hasContent) return;
      const { error: insertError } = await ctx.client.from('child_progress').insert({
        child_id: child.id,
        curriculum_state: { ...local.state, clientUpdatedAt: new Date().toISOString() },
        last_device: String(navigator.userAgent || '').slice(0, 240)
      });
      if (insertError) throw insertError;
      localStorage.setItem(`${CURRICULUM_META_PREFIX}${child.id}`, new Date().toISOString());
      return;
    }

    if (!remoteHas && local.hasContent) {
      await uploadCurriculum(ctx, child, local.state);
      return;
    }

    if (remoteHas && local.hasContent && local.updatedAtMs > remoteUpdatedMs) {
      await uploadCurriculum(ctx, child, local.state);
      return;
    }

    if (remoteHas) {
      const merged = { ...remoteState };
      if (!merged.diagnostic && local.state.diagnostic) merged.diagnostic = local.state.diagnostic;
      applyRemoteCurriculum(ctx.userId, child, merged, remote?.updated_at || new Date().toISOString());
      if (!remoteState.diagnostic && local.state.diagnostic) await uploadCurriculum(ctx, child, merged);
    }
  }

  async function uploadCurriculum(ctx, child, state) {
    const payload = { ...state, clientUpdatedAt: new Date().toISOString() };
    const { error } = await ctx.client
      .from('child_progress')
      .upsert({
        child_id: child.id,
        curriculum_state: payload,
        last_device: String(navigator.userAgent || '').slice(0, 240)
      }, { onConflict: 'child_id' });
    if (error) throw error;
    localStorage.setItem(`${CURRICULUM_META_PREFIX}${child.id}`, payload.clientUpdatedAt);
  }

  async function syncCurriculumIfChanged() {
    try {
      cachedCloudContext = null;
      const ctx = await getCloudContext();
      if (!ctx) return;
      const child = await activeCloudChild(ctx);
      if (!child) return;
      const local = captureCurriculumLocal(ctx.userId, child);
      if (!local.hasContent || !local.updatedAtMs) return;
      const { data: remote, error } = await ctx.client
        .from('child_progress')
        .select('updated_at')
        .eq('child_id', child.id)
        .maybeSingle();
      if (error) throw error;
      const remoteUpdatedMs = Date.parse(remote?.updated_at || '') || 0;
      if (local.updatedAtMs > remoteUpdatedMs) await uploadCurriculum(ctx, child, local.state);
    } catch (error) {
      console.warn('NOVA curriculum sync skipped:', error?.message || error);
    }
  }

  function readTrial(){
    const value = readJson(TRIAL_KEY);
    return value?.completed ? value : null;
  }

  function setupTrialHandoff(){
    const params = new URLSearchParams(location.search);
    const trial = readTrial();
    if (!trial || params.get('trial') !== 'done') return;

    const childNameInput = document.querySelector('#childNameInput');
    const childProfileNameInput = document.querySelector('#childProfileNameInput');
    if (childNameInput && !childNameInput.value) childNameInput.value = trial.child || '';
    if (childProfileNameInput && !childProfileNameInput.value) childProfileNameInput.value = trial.child || '';

    const shell = document.querySelector('#accessGate .access-shell');
    if (!shell || shell.querySelector('.v24-trial-result')) return;

    const strongNames = { numbers:'números y cantidades', operations:'operaciones', problems:'problemas escritos' };
    const focus = strongNames[trial.focus] || 'su ruta escolar';
    const banner = document.createElement('section');
    banner.className = 'v24-trial-result';
    banner.setAttribute('aria-label','Resultado de la prueba gratuita');
    banner.innerHTML = `
      <div class="v24-trial-result-icon">✦</div>
      <div>
        <small>3 MISIONES COMPLETADAS</small>
        <strong>${escapeHtml(trial.child || 'Tu hijo')} ya probó NOVA · ${Number(trial.score) || 0}% observado</strong>
        <p>Su primera ruta debería prestar atención a ${escapeHtml(focus)}. Crea la cuenta para continuar desde este punto.</p>
      </div>`;
    shell.prepend(banner);
  }

  function setupTodayHome(){
    const home = document.querySelector('#learningHub');
    const shell = home?.querySelector('.curriculum-home-shell');
    const head = home?.querySelector('.home-head');
    const continueBtn = document.querySelector('#continueLearningBtn');
    const askNova = document.querySelector('#askNovaHomeBtn');
    if (!home || !shell || !head || !continueBtn || !askNova) return;

    home.classList.add('v24-learning-home');
    const eyebrow = head.querySelector('.eyebrow');
    const subtitle = head.querySelector('p:not(.eyebrow)');
    if (eyebrow) eyebrow.textContent = 'HOY CON NOVA';
    if (subtitle) subtitle.textContent = 'Una misión clara, una duda a la vez. NOVA te ayuda a decidir qué hacer después.';

    if (!shell.querySelector('.v24-today-grid')) {
      const grid = document.createElement('section');
      grid.className = 'v24-today-grid';
      grid.setAttribute('aria-label','Tu aprendizaje de hoy');

      const mission = document.createElement('article');
      mission.className = 'v24-mission-shell';
      mission.innerHTML = `
        <div class="v24-mission-label">
          <span>TU PRÓXIMA MISIÓN</span>
          <b class="v24-route-chip" id="v24RouteChip">Ruta escolar</b>
        </div>`;
      mission.appendChild(continueBtn);

      const side = document.createElement('aside');
      side.className = 'v24-side-shell';
      side.innerHTML = `
        <div class="v24-side-head">
          <small>NOVA A TU LADO</small>
          <strong>¿Hay algo que no entendiste?</strong>
          <p>No necesitas buscar la materia primero. Cuéntale la duda y NOVA empieza desde ahí.</p>
        </div>`;
      side.appendChild(askNova);
      const note = document.createElement('div');
      note.className = 'v24-home-note';
      note.innerHTML = '<b>✓</b><span>NOVA guía el razonamiento. No está diseñado para hacer la tarea por ti.</span>';
      side.appendChild(note);

      grid.append(mission, side);
      head.insertAdjacentElement('afterend', grid);
    }

    const gradeLabel = document.querySelector('#subjectsGradeLabel');
    const routeChip = document.querySelector('#v24RouteChip');
    const syncGrade = () => {
      if (!routeChip) return;
      const text = String(gradeLabel?.textContent || '').trim();
      routeChip.textContent = text && !/elige/i.test(text) ? text : 'Elige tu grado';
    };
    syncGrade();
    if (gradeLabel) new MutationObserver(syncGrade).observe(gradeLabel,{childList:true,subtree:true,characterData:true});

    const syncVisibility = () => document.body.classList.toggle('v24-home-active', !home.hidden);
    syncVisibility();
    new MutationObserver(syncVisibility).observe(home,{attributes:true,attributeFilter:['hidden']});
  }

  function reinforcePersonalization(){
    const hubName = document.querySelector('#hubChildName');
    if (!hubName) return;
    const apply = () => {
      const name = String(hubName.textContent || '').trim();
      document.querySelectorAll('[data-v24-child]').forEach(el => { el.textContent = name || 'Explorador'; });
    };
    apply();
    new MutationObserver(apply).observe(hubName,{childList:true,subtree:true,characterData:true});
  }

  function escapeHtml(value){
    return String(value || '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  }

  function initV24(){
    document.documentElement.dataset.novaVersion = '24.1';
    setupTrialHandoff();
    setupTodayHome();
    reinforcePersonalization();
    window.setInterval(syncCurriculumIfChanged, 15000);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') syncCurriculumIfChanged(); });
  }
})();
