function lockScroll(locked: boolean): void {
  const body = document.body;
  if (locked) {
    const gap = window.innerWidth - document.documentElement.clientWidth;
    body.dataset.scrollLock = 'true';
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    body.style.overflow = 'hidden';
  } else {
    delete body.dataset.scrollLock;
    body.style.paddingRight = '';
    body.style.overflow = '';
  }
}

export function initModals(): void {
  if (document.documentElement.dataset.modalsInit === 'true') return;
  document.documentElement.dataset.modalsInit = 'true';

  const dialogs = document.querySelectorAll<HTMLDialogElement>('dialog.modal');
  if (dialogs.length === 0) return;

  const openers = document.querySelectorAll<HTMLElement>('[data-modal-open]');
  const closers = document.querySelectorAll<HTMLElement>('[data-modal-close]');
  const lastOpener = new WeakMap<HTMLDialogElement, HTMLElement>();

  const open = (id: string, opener?: HTMLElement): void => {
    const dialog = document.getElementById(id) as HTMLDialogElement | null;
    if (!dialog) return;
    if (opener) lastOpener.set(dialog, opener);
    // Carga diferida del visor de Drive: evita 8 iframes precargados
    const pending = dialog.querySelector<HTMLIFrameElement>('iframe[data-deferred-src]');
    if (pending && !pending.src) pending.src = pending.dataset.deferredSrc ?? '';
    if (!dialog.open) dialog.showModal();
    const firstFocus = dialog.querySelector<HTMLElement>('[data-modal-close]');
    (firstFocus ?? dialog).focus();
    lockScroll(true);
  };

  const close = (dialog: HTMLDialogElement): void => {
    if (dialog.open) dialog.close();
  };

  openers.forEach((opener) => {
    const target = opener.dataset.modalOpen;
    if (!target) return;
    opener.addEventListener('click', (event) => {
      event.preventDefault();
      open(target, opener);
    });
  });

  closers.forEach((closer) => {
    closer.addEventListener('click', () => {
      const dialog = closer.closest<HTMLDialogElement>('dialog.modal');
      if (dialog) close(dialog);
    });
  });

  dialogs.forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) close(dialog);
    });

    dialog.addEventListener('close', () => {
      if (!document.querySelector('dialog.modal[open]')) lockScroll(false);
      // Devuelve el foco al botón que abrió el modal (a11y)
      lastOpener.get(dialog)?.focus({ preventScroll: true });
    });
  });

  window.addEventListener('astro:before-swap', () => lockScroll(false));
}
