(() => {
  const SESSION_KEY = 'novaAnalyticsSessionV1';

  function randomId() {
    if (crypto?.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  function sessionId() {
    try {
      let value = localStorage.getItem(SESSION_KEY);
      if (!value) {
        value = randomId();
        localStorage.setItem(SESSION_KEY, value);
      }
      return value;
    } catch {
      return randomId();
    }
  }

  function authToken() {
    try {
      for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        if (!key || !/^sb-.*-auth-token$/.test(key)) continue;
        const parsed = JSON.parse(localStorage.getItem(key) || 'null');
        const token = parsed?.access_token || parsed?.currentSession?.access_token;
        if (token) return token;
      }
    } catch {}
    return '';
  }

  async function track(event, properties = {}, source = '') {
    const payload = {
      event,
      sessionId: sessionId(),
      source: source || document.documentElement.dataset.novaSurface || 'web',
      path: `${location.pathname}${location.search}`.slice(0, 240),
      properties
    };
    const headers = { 'Content-Type': 'application/json' };
    const token = authToken();
    if (token) headers.Authorization = `Bearer ${token}`;

    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
        keepalive: true,
        cache: 'no-store'
      });
    } catch {}
  }

  window.NOVAAnalytics = { track, sessionId };
})();
