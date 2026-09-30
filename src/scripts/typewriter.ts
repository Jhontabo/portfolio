const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const HOLD_DURATION = 2000;
const GAP_DURATION = 400;

export function initTypewriter(): void {
  const roots = document.querySelectorAll<HTMLElement>('[data-typewriter]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  roots.forEach((root) => {
    const output = root.querySelector<HTMLElement>('[data-typewriter-output]');
    if (!output) return;

    let roles: string[] = [];
    try {
      roles = JSON.parse(root.dataset.roles ?? '[]') as string[];
    } catch {
      roles = (root.dataset.roles ?? '').split('|').filter(Boolean);
    }
    if (roles.length === 0) return;

    if (reduceMotion) {
      output.textContent = roles[0] ?? '';
      return;
    }

    output.textContent = '';

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: number | undefined;

    const tick = (): void => {
      const current = roles[roleIndex] ?? '';

      if (!deleting && charIndex === current.length) {
        deleting = true;
        timer = window.setTimeout(tick, HOLD_DURATION);
        return;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timer = window.setTimeout(tick, GAP_DURATION);
        return;
      }

      charIndex += deleting ? -1 : 1;
      output.textContent = current.slice(0, charIndex);
      timer = window.setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
    };

    timer = window.setTimeout(tick, TYPE_SPEED);

    const cleanup = (): void => window.clearTimeout(timer);
    root.addEventListener('astro:before-swap', cleanup, { once: true });
  });
}
