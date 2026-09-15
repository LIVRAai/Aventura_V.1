(() => {
  const MODAL_SELECTOR = '.modal';
  let lastFocused = null;

  function visibleModal() {
    return [...document.querySelectorAll(MODAL_SELECTOR)].reverse().find(modal => !modal.hidden && getComputedStyle(modal).display !== 'none') || null;
  }

  function closeControl(modal) {
    if (!modal) return null;
    return modal.querySelector([
      'button[aria-label*="cerrar" i]',
      'button[id*="close" i]',
      'button[class*="close" i]',
      '[data-close-modal]'
    ].join(','));
  }

  function focusable(modal) {
    return modal?.querySelector([
      'button:not(:disabled)',
      'a[href]',
      'input:not(:disabled)',
      'select:not(:disabled)',
      'textarea:not(:disabled)',
      '[tabindex]:not([tabindex="-1"])'
    ].join(','));
  }

  function syncModalState(modal) {
    const open = !modal.hidden && getComputedStyle(modal).display !== 'none';
    modal.classList.toggle('nova-modal-visible', open);
    const anyOpen = Boolean(visibleModal());
    document.body.classList.toggle('nova-modal-open', anyOpen);

    if (open) {
      if (!lastFocused || !lastFocused.isConnected) lastFocused = document.activeElement;
      const dialog = modal.querySelector('[role="dialog"]');
      if (dialog && !dialog.hasAttribute('tabindex')) dialog.setAttribute('tabindex', '-1');
      requestAnimationFrame(() => (focusable(modal) || dialog)?.focus?.({ preventScroll: true }));
    } else if (!anyOpen && lastFocused?.isConnected) {
      requestAnimationFrame(() => lastFocused?.focus?.({ preventScroll: true }));
      lastFocused = null;
    }
  }

  function observeModal(modal) {
    syncModalState(modal);
    new MutationObserver(() => syncModalState(modal)).observe(modal, {
      attributes: true,
      attributeFilter: ['hidden', 'class', 'style']
    });

    modal.addEventListener('mousedown', event => {
      if (event.target !== modal) return;
      closeControl(modal)?.click();
    });
  }

  document.querySelectorAll(MODAL_SELECTOR).forEach(observeModal);

  new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (!(node instanceof Element)) return;
        if (node.matches?.(MODAL_SELECTOR)) observeModal(node);
        node.querySelectorAll?.(MODAL_SELECTOR).forEach(observeModal);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const modal = visibleModal();
    if (!modal) return;
    const close = closeControl(modal);
    if (!close) return;
    event.preventDefault();
    close.click();
  });

  document.documentElement.dataset.novaUi = '24.3';
  document.documentElement.dataset.novaVersion = '24.3';
})();
