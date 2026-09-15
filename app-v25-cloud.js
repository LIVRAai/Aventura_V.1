(() => {
  const ADAPTIVE_PREFIX = 'novaAdaptiveProfileV25:';
  const ENGAGEMENT_PREFIX = 'novaEngagementV24:';
  const GAME_PREFIX = 'novaCurriculumGameProgressV1:';
  const TRIAL_KEY = 'novaTrialV24';
  let cloudConfig = null;
  let timer = null;
  let syncing = false;
  let pending = false;
  let installed = false;

  function readJson(key) {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; }
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

  async function context() {
    if (!window.supabase?.createClient) return null;
    if (!cloudConfig) {
      const response = await fetch('/api/public-config', { cache:'no-store' });
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
    const client = window.supabase.createClient(url, key, {
      auth:{ persistSession:false, autoRefreshToken:false, detectSessionInUrl:false },
      global:{ headers:{ Authorization:`Bearer ${session.access_token}` } }
    });
    return { client, userId };
  }

  async function activeChild(ctx) {
    const { data, error } = await ctx.client
      .from('children')
      .select('id,parent_id,created_at')
      .eq('parent_id', ctx.userId)
      .eq('is_active', true)
      .order('created_at', { ascending:true })
      .limit(1);
    if (error) throw error;
    return Array.isArray(data) ? data[0] || null : null;
  }

  function localV25(childId) {
    return {
      adaptiveProfile: readJson(`${ADAPTIVE_PREFIX}${childId}`) || null,
      engagement: readJson(`${ENGAGEMENT_PREFIX}${childId}`) || { days:{} }
    };
  }

  async function syncNow() {
    if (syncing) { pending = true; return; }
    syncing = true;
    pending = false;
    try {
      const ctx = await context();
      if (!ctx) return;
      const child = await activeChild(ctx);
      if (!child) return;
      const local = localV25(child.id);
      if (!local.adaptiveProfile && !Object.keys(local.engagement?.days || {}).length) return;

      const { data: remote, error: readError } = await ctx.client
        .from('child_progress')
        .select('curriculum_state')
        .eq('child_id', child.id)
        .maybeSingle();
      if (readError) throw readError;

      const remoteState = remote?.curriculum_state && typeof remote.curriculum_state === 'object'
        ? remote.curriculum_state
        : {};
      const merged = {
        ...remoteState,
        version: Math.max(2, Number(remoteState.version || 0)),
        adaptiveProfile: local.adaptiveProfile,
        engagement: local.engagement,
        v25UpdatedAt: new Date().toISOString()
      };

      const { error: writeError } = await ctx.client
        .from('child_progress')
        .upsert({
          child_id: child.id,
          curriculum_state: merged,
          last_device: String(navigator.userAgent || '').slice(0, 240)
        }, { onConflict:'child_id' });
      if (writeError) throw writeError;
      document.documentElement.dataset.novaCloudV25 = 'synced';
    } catch (error) {
      document.documentElement.dataset.novaCloudV25 = 'deferred';
      console.warn('NOVA V25 cloud sync skipped:', error?.message || error);
    } finally {
      syncing = false;
      if (pending) schedule(900);
    }
  }

  function schedule(delay = 1200) {
    window.clearTimeout(timer);
    timer = window.setTimeout(syncNow, delay);
  }

  function installStorageObserver() {
    if (installed) return;
    installed = true;
    const previous = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key, value) {
      previous.call(this, key, value);
      if (this !== window.localStorage || typeof key !== 'string') return;
      if (key === TRIAL_KEY || key.startsWith(ADAPTIVE_PREFIX) || key.startsWith(ENGAGEMENT_PREFIX) || key.startsWith(GAME_PREFIX)) {
        schedule();
      }
    };
  }

  function hydrateRemoteV25() {
    window.setTimeout(async () => {
      try {
        const ctx = await context();
        if (!ctx) return;
        const child = await activeChild(ctx);
        if (!child) return;
        const { data, error } = await ctx.client
          .from('child_progress')
          .select('curriculum_state')
          .eq('child_id', child.id)
          .maybeSingle();
        if (error) throw error;
        const state = data?.curriculum_state;
        if (!state || typeof state !== 'object') return;
        const localAdaptive = readJson(`${ADAPTIVE_PREFIX}${child.id}`);
        const localEngagement = readJson(`${ENGAGEMENT_PREFIX}${child.id}`);
        if (!localAdaptive && state.adaptiveProfile) localStorage.setItem(`${ADAPTIVE_PREFIX}${child.id}`, JSON.stringify(state.adaptiveProfile));
        if ((!localEngagement || !Object.keys(localEngagement?.days || {}).length) && state.engagement) {
          localStorage.setItem(`${ENGAGEMENT_PREFIX}${child.id}`, JSON.stringify(state.engagement));
        }
      } catch (error) {
        console.warn('NOVA V25 cloud hydrate skipped:', error?.message || error);
      }
    }, 900);
  }

  installStorageObserver();
  hydrateRemoteV25();
  schedule(1800);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') syncNow();
  });
})();
