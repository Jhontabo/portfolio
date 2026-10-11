export function initJourneyExpand(): void {
  const toggles = document.querySelectorAll<HTMLButtonElement>('[data-journey-toggle]');
  if (toggles.length === 0) return;

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const panelId = toggle.getAttribute('aria-controls');
      if (!panelId) return;
      const panel = document.getElementById(panelId);
      if (!panel) return;
      const open = panel.classList.toggle('is-open');
      document
        .querySelectorAll(`[data-journey-toggle][aria-controls="${panelId}"]`)
        .forEach((el) => el.setAttribute('aria-expanded', String(open)));
    });
  });
}

interface Point {
  x: number;
  y: number;
}

function smoothPath(points: Point[]): string {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const midX1 = p1.x + (p2.x - p0.x) / 6;
    const midY1 = p1.y + (p2.y - p0.y) / 6;
    const midX2 = p2.x - (p3.x - p1.x) / 6;
    const midY2 = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${midX1} ${midY1}, ${midX2} ${midY2}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export function initSnakePath(): void {
  const svg = document.querySelector<SVGSVGElement>('[data-snake-svg]');
  const path = document.querySelector<SVGPathElement>('[data-snake-path]');
  if (!svg || !path) return;
  const desktop = window.matchMedia('(min-width: 768px)');

  let ticking = false;
  const paint = (): void => {
    ticking = false;
    if (!desktop.matches) {
      path.setAttribute('d', '');
    } else {
      const circles = [...document.querySelectorAll<HTMLElement>('[data-circle]')].filter(
        (el) => el.getBoundingClientRect().width > 0,
      );
      if (circles.length > 0) {
        const svgRect = svg.getBoundingClientRect();
        const points = circles.map((circle) => {
          const rect = circle.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2 - svgRect.left,
            y: rect.top + rect.height / 2 - svgRect.top,
          };
        });
        path.setAttribute('d', smoothPath(points));
      }
    }
  };
  const requestPaint = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(paint);
  };

  paint();
  window.addEventListener('resize', requestPaint);
  if ('ResizeObserver' in window) {
    const container = svg.parentElement;
    if (container) new ResizeObserver(() => requestPaint()).observe(container);
  }
  if (document.fonts) {
    document.fonts.ready.then(() => paint()).catch(() => undefined);
  }
}
export function initOriginConnector(): void {
  const line = document.querySelector<HTMLElement>('[data-timeline-line]');
  const path = document.querySelector<SVGPathElement>('[data-connector-path]');
  const wrap = document.querySelector<HTMLElement>('[data-connector-wrap]');
  if (!line || !path || !wrap) return;

  let ticking = false;
  const paint = (): void => {
    ticking = false;
    const circle = [...document.querySelectorAll<HTMLElement>('[data-origin-circle]')].find(
      (el) => el.getBoundingClientRect().width > 0,
    );
    if (!circle) return;
    const circleRect = circle.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    const x1 = circleRect.left + circleRect.width / 2 - wrapRect.left;
    const x2 = lineRect.left + lineRect.width / 2 - wrapRect.left;
    path.setAttribute('d', `M ${x1} 2 L ${x2} 58`);
  };
  const requestPaint = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(paint);
  };

  paint();
  window.addEventListener('resize', requestPaint);
}
