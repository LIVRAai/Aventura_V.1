(() => {
  const heroPrimary = document.querySelector('.hero-actions .button-primary');
  if (heroPrimary) {
    heroPrimary.href = '/prueba';
    heroPrimary.textContent = 'Probar NOVA gratis';
  }

  const bottomPrimary = document.querySelector('.cta-actions .button-light');
  if (bottomPrimary) {
    bottomPrimary.href = '/prueba';
    bottomPrimary.textContent = 'Probar 3 misiones gratis';
  }

  const phone = document.querySelector('.demo-phone');
  const stepLabel = document.querySelector('#demoStepLabel');
  const kicker = document.querySelector('#demoKicker');
  const title = document.querySelector('#demoTitle');
  const text = document.querySelector('#demoText');
  const message = document.querySelector('#novaMessageText');
  const progress = document.querySelector('#demoProgress');
  const nextBtn = document.querySelector('#demoNextBtn');

  if (!phone || !stepLabel || !kicker || !title || !text || !message || !progress || !nextBtn) return;

  const scenes = [
    {
      kicker: 'UNA DUDA',
      title: '“No entiendo esta división.”',
      text: '864 ÷ 4',
      message: 'No te voy a dar la respuesta. Vamos a descubrirla juntos.'
    },
    {
      kicker: 'NOVA ACOMPAÑA',
      title: 'Empecemos por una sola idea.',
      text: '¿Cuántas veces cabe 4 en 8?',
      message: 'Piensa en la tabla del 4. ¿Qué número multiplicado por 4 nos acerca exactamente a 8?'
    },
    {
      kicker: 'EL NIÑO RAZONA',
      title: '4 × 2 = 8',
      text: 'Entonces escribo 2.',
      message: 'Eso es. Ya descubriste el primer paso tú mismo. Ahora podemos continuar desde ahí.'
    },
    {
      kicker: 'COMPRENSIÓN',
      title: '“Ahora sí lo entiendo.”',
      text: '+80 XP · Misión completada',
      message: 'No memorizaste una respuesta: entendiste cómo encontrarla.'
    }
  ];

  let index = 0;
  let timer = null;

  function renderScene(nextIndex, userInitiated = false) {
    index = (nextIndex + scenes.length) % scenes.length;
    const scene = scenes[index];

    phone.classList.add('is-changing');
    window.setTimeout(() => {
      kicker.textContent = scene.kicker;
      title.textContent = scene.title;
      text.textContent = scene.text;
      message.textContent = scene.message;
      stepLabel.textContent = `${index + 1} de ${scenes.length}`;
      progress.style.width = `${((index + 1) / scenes.length) * 100}%`;
      nextBtn.innerHTML = index === scenes.length - 1
        ? 'Ver de nuevo <span>↻</span>'
        : 'Siguiente <span>→</span>';
      phone.classList.remove('is-changing');
    }, 160);

    if (userInitiated) restartTimer();
  }

  function restartTimer() {
    if (timer) window.clearInterval(timer);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = window.setInterval(() => renderScene(index + 1), 5200);
  }

  nextBtn.addEventListener('click', () => renderScene(index + 1, true));

  const demo = document.querySelector('#demo');
  if (demo && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.some(entry => entry.isIntersecting);
      if (visible) restartTimer();
      else if (timer) window.clearInterval(timer);
    }, { threshold: 0.3 });
    observer.observe(demo);
  } else {
    restartTimer();
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      history.replaceState(null, '', id);
    });
  });

  renderScene(0);
})();
