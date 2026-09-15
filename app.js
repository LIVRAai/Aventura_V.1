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
      load('/app-v24-2.js');
    });
  });
})();
