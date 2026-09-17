(() => {
  function load(src, onload) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    if (onload) script.onload = onload;
    document.body.appendChild(script);
  }

  load('/analytics-client.js', () => {
    load('/app-v24.js', () => {
      let attempts = 0;
      const timer = window.setInterval(() => {
        attempts += 1;
        if (document.documentElement.dataset.novaVersion === '24.1' || attempts > 100) {
          window.clearInterval(timer);
          load('/app-v24-2.js', () => {
            load('/nova-ui.js', () => {
              load('/app-v25.js', () => {
                load('/app-v25-growth.js', () => {
                  load('/app-v25-cloud.js', () => {
                    load('/app-v26.js', () => {
                      load('/app-v27-core.js', () => {
                        load('/app-v27-math.js', () => {
                          load('/app-v27-language.js', () => {
                            load('/app-v27-science.js', () => {
                              load('/app-v27-social.js', () => {
                                load('/app-v27-english.js', () => load('/app-v27-boot.js'));
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        }
      }, 100);
    });
  });
})();
