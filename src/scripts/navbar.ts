export function initNavbar(): void {
  const nav = document.querySelector<HTMLElement>('[data-navbar]');
  const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  const drawer = document.querySelector<HTMLElement>('[data-nav-drawer]');
  const iconMenu = document.querySelector<HTMLElement>('[data-nav-icon="menu"]');
  const iconClose = document.querySelector<HTMLElement>('[data-nav-icon="x"]');

  if (nav) {
    let ticking = false;
    const apply = (): void => {
      nav.classList.toggle('is-scrolled', window.scrollY > 20);
      ticking = false;
    };
    apply();
    window.addEventListener(
      'scroll',
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(apply);
      },
      { passive: true },
    );
  }

  if (!toggle || !drawer) return;

  const isOpen = (): boolean => drawer.classList.contains('is-open');

  const setOpen = (open: boolean): void => {
    drawer.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (iconMenu) iconMenu.hidden = open;
    if (iconClose) iconClose.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  };

  setOpen(false);

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  drawer.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('mousedown', (event) => {
    if (!isOpen()) return;
    const target = event.target as Node;
    if (!drawer.contains(target) && !toggle.contains(target)) setOpen(false);
  });
}
