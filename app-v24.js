(() => {
  const legacy = document.createElement('script');
  legacy.src = '/app-legacy.js';
  legacy.async = false;
  legacy.onload = () => window.setTimeout(initV24, 0);
  legacy.onerror = () => console.error('No fue posible cargar la experiencia base de NOVA.');
  document.body.appendChild(legacy);

  function readTrial(){
    try {
      const value = JSON.parse(localStorage.getItem('novaTrialV24') || 'null');
      return value && value.completed ? value : null;
    } catch { return null; }
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

    const strongNames = {
      numbers:'números y cantidades',
      operations:'operaciones',
      problems:'problemas escritos'
    };
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
  }
})();
