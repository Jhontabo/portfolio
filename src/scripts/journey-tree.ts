export function initJourneyTree(): void {
  const timeline = document.querySelector<HTMLElement>('[data-tree]');
  const fill = document.querySelector<HTMLElement>('[data-tree-fill]');
  if (!timeline || !fill) return;

  // Solo en versión web: el móvil queda intacto
  const desktop = window.matchMedia('(min-width: 768px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let ticking = false;

  const paint = (): void => {
    ticking = false;
    if (!desktop.matches) {
      fill.style.height = '0%';
      return;
    }
    if (reducedMotion.matches) {
      fill.style.height = '100%';
      return;
    }
    const rect = timeline.getBoundingClientRect();
    const progress = Math.min(
      Math.max(window.innerHeight * 0.65 - rect.top, 0) / rect.height,
      1,
    );
    fill.style.height = `${progress * 100}%`;
  };

  const requestPaint = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(paint);
  };

  paint();
  window.addEventListener('scroll', requestPaint, { passive: true });
  window.addEventListener('resize', requestPaint);
}
