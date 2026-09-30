const REVEAL_SELECTOR = '[data-reveal]';

export function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
  if (targets.length === 0) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}
