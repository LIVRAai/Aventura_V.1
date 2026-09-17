(() => {
  const TARGET_VISUAL_VERSION = '27.0';
  document.documentElement.dataset.novaTargetVisualVersion = TARGET_VISUAL_VERSION;

  function preload(src) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'script';
    link.href = src;
    document.head.appendChild(link);
  }

  function load(src, onload, async = false) {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    if (onload) script.onload = onload;
    document.body.appendChild(script);
  }

  [
    '/app-v24.js',
    '/app-v24-2.js',
    '/nova-ui.js',
    '/app-v25.js',
    '/app-v25-growth.js',
    '/app-v25-cloud.js',
    '/app-v27.js',
    '/app-v27-intent.js',
    '/app-v27-coherence-guardian.js'
  ].forEach(preload);

  // Analytics no debe bloquear el arranque de la experiencia infantil.
  load('/analytics-client.js', null, true);

  load('/app-v24.js', () => {
    let attempts = 0;
    const continueLoading = () => {
      load('/app-v24-2.js', () => {
        load('/nova-ui.js', () => {
          load('/app-v25.js', () => {
            load('/app-v25-growth.js', () => {
              load('/app-v25-cloud.js', () => {
                load('/app-v27.js', () => {
                  load('/app-v27-intent.js', () => load('/app-v27-coherence-guardian.js'));
                });
              });
            });
          });
        });
      });
    };

    const timer = window.setInterval(() => {
      attempts += 1;
      if (document.documentElement.dataset.novaVersion === '24.1' || attempts > 20) {
        window.clearInterval(timer);
        continueLoading();
      }
    }, 100);
  });
})();