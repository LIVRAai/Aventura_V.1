(() => {
  const PROFILE_KEY = 'expeditionFamilyProfileV1';
  const ADAPTIVE_PREFIX = 'novaAdaptiveProfileV25:';
  let lastSnapshot = null;

  function readJson(key) {
    try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; }
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;'
    }[char]));
  }

  function profile() { return readJson(PROFILE_KEY) || {}; }
  function childId() { return String(profile()?.childId || ''); }
  function snapshot() {
    const id = childId();
    return id ? readJson(`${ADAPTIVE_PREFIX}${id}`) : null;
  }

  function track(event, properties = {}) {
    window.NOVAAnalytics?.track?.(event, properties, 'app');
  }

  function characterMood(data) {
    const rec = data?.recommendation;
    if (rec?.state === 'mastered') return { mood:'celebrate', text:'¡Buen trabajo! Ya hay evidencia de dominio.' };
    if (rec?.state === 'reinforce') return { mood:'guide', text:'Vamos con calma. Te voy a dar otra estrategia.' };
    if (rec?.state === 'progress') return { mood:'focus', text:'Vas avanzando. Una práctica más nos dará mejor evidencia.' };
    return { mood:'curious', text:'Empecemos y descubramos juntos qué conviene practicar.' };
  }

  function renderCharacter(data) {
    const home = document.querySelector('#learningHub');
    const anchor = home?.querySelector('.v25-adaptive-card');
    if (!home || !anchor || !data) return;
    const state = characterMood(data);
    let guide = home.querySelector('.v25-nova-guide');
    if (!guide) {
      guide = document.createElement('aside');
      guide.className = 'v25-nova-guide';
      guide.setAttribute('aria-label', 'NOVA, compañero de aprendizaje');
      anchor.insertAdjacentElement('beforebegin', guide);
    }
    guide.dataset.mood = state.mood;
    guide.innerHTML = `
      <div class="v25-nova-face" aria-hidden="true">
        <span class="eye left"></span><span class="eye right"></span><span class="mouth"></span>
      </div>
      <div class="v25-nova-copy">
        <small>NOVA · COMPAÑERO DE APRENDIZAJE</small>
        <strong>${escapeHtml(state.text)}</strong>
        <p>No hago la tarea por ti. Te ayudo a entender cómo resolverla.</p>
      </div>`;
  }

  function achievementText(data) {
    const name = String(profile()?.childName || 'Mi explorador');
    const s = data?.summary || {};
    const unlocked = (data?.badges || []).filter(item => item.unlocked);
    const badge = unlocked.length ? unlocked[unlocked.length - 1].label : 'aprendizaje en marcha';
    return `${name} sigue avanzando con NOVA: ${s.mastered || 0} temas dominados, racha de ${s.streak || 0} días y ${Number(s.xp || 0).toLocaleString('es-CO')} XP. Logro: ${badge}.`;
  }

  function weeklyText(data) {
    const name = String(profile()?.childName || 'Tu hijo');
    const w = data?.weekly || {};
    const rec = data?.recommendation || {};
    return `Resumen semanal de ${name} en NOVA: ${w.days || 0} días de práctica, ${w.minutes || 0} minutos registrados y ${w.masteryActive || 0} dominios trabajados. Siguiente recomendación: ${rec.title || rec.subjectName || 'continuar la ruta recomendada'}.`;
  }

  async function shareText(text, title) {
    if (navigator.share) {
      try {
        await navigator.share({ title, text });
        return 'shared';
      } catch (error) {
        if (error?.name === 'AbortError') return 'cancelled';
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      return 'copied';
    } catch {
      return 'unavailable';
    }
  }

  function renderShareActions(data) {
    const badges = document.querySelector('.v25-badges');
    if (badges && !badges.querySelector('.v25-share-achievement')) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'v25-share-achievement';
      button.textContent = 'Compartir avance';
      const status = document.createElement('small');
      status.className = 'v25-share-status';
      badges.append(button, status);
      button.addEventListener('click', async () => {
        const current = snapshot() || data;
        const result = await shareText(achievementText(current), 'Avance con NOVA');
        if (result === 'shared' || result === 'copied') {
          status.textContent = result === 'shared' ? 'Compartido' : 'Resumen copiado';
          track('achievement_shared', { method: result, mastered:Number(current?.summary?.mastered || 0) });
        }
      });
    }

    const family = document.querySelector('.v25-family-intelligence');
    if (family && !family.querySelector('.v25-share-weekly')) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'v25-share-weekly';
      button.textContent = 'Compartir resumen semanal';
      const status = document.createElement('small');
      status.className = 'v25-share-status';
      family.append(button, status);
      button.addEventListener('click', async () => {
        const current = snapshot() || data;
        const result = await shareText(weeklyText(current), 'Resumen semanal NOVA');
        if (result === 'shared' || result === 'copied') {
          status.textContent = result === 'shared' ? 'Compartido' : 'Resumen copiado';
          track('weekly_summary_shared', { method: result, days:Number(current?.weekly?.days || 0), minutes:Number(current?.weekly?.minutes || 0) });
        }
      });
    }
  }

  function render(data) {
    if (!data) return;
    lastSnapshot = data;
    renderCharacter(data);
    renderShareActions(data);
  }

  function boot() {
    if (!document.querySelector('#learningHub')) return false;
    render(snapshot());
    window.addEventListener('nova:v25:updated', event => render(event.detail));
    const parent = document.querySelector('#learningProgressModal');
    if (parent) new MutationObserver(() => {
      if (!parent.hidden) window.setTimeout(() => render(snapshot() || lastSnapshot), 40);
    }).observe(parent, { attributes:true, attributeFilter:['hidden'] });
    window.setInterval(() => render(snapshot() || lastSnapshot), 2500);
    return true;
  }

  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (boot() || attempts > 100) window.clearInterval(timer);
  }, 150);
})();
