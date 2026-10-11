import { driver } from 'driver.js';

export interface HintStep {
  getTarget: () => HTMLElement | null;
  title: string;
  description: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
}

export interface HintTour {
  key: string;
  doneText: string;
  steps: HintStep[];
  skipIf?: () => boolean;
}

export type HintSingle = HintStep & Pick<HintTour, 'key' | 'doneText'> & {
  skipIf?: () => boolean;
};

function seen(key: string): boolean {
  try {
    return localStorage.getItem(key) === '1';
  } catch {
    return false;
  }
}

function mark(key: string): void {
  try {
    localStorage.setItem(key, '1');
  } catch {
    /* almacenamiento no disponible */
  }
}

export function isEnglish(): boolean {
  return document.documentElement.lang.startsWith('en');
}

let tourActive = false;

/** Muestra un tour de driver.js una sola vez cuando el primer objetivo entra en pantalla. */
export function hintTour(sectionId: string, tour: HintTour): void {
  const section = document.getElementById(sectionId);
  if (!section || seen(tour.key)) return;

  let fired = false;
  let ticking = false;

  const start = (): void => {
    window.setTimeout(() => {
      if (tourActive) {
        mark(tour.key);
        return;
      }
      if (tour.skipIf?.()) {
        mark(tour.key);
        return;
      }
      const resolved = tour.steps
        .map((step) => ({ step, target: step.getTarget() }))
        .filter(
          (item): item is { step: HintStep; target: HTMLElement } => item.target !== null,
        )
        .filter((item) => {
          const rect = item.target.getBoundingClientRect();
          return rect.width > 0 && rect.bottom >= 0 && rect.top <= window.innerHeight;
        });
      if (resolved.length === 0) {
        mark(tour.key);
        return;
      }
      tourActive = true;
      driver({
        popoverClass: 'jtour-popover',
        stagePadding: 8,
        allowClose: true,
        showProgress: resolved.length > 1,
        doneBtnText: tour.doneText,
        onDestroyed: () => {
          tourActive = false;
          mark(tour.key);
        },
        steps: resolved.map((item) => ({
          element: item.target,
          popover: {
            title: item.step.title,
            description: item.step.description,
            side: item.step.side ?? 'bottom',
            align: item.step.align ?? 'center',
          },
        })),
      }).drive();
    }, 600);
  };

  const firstTarget = (): HTMLElement | null => tour.steps[0]?.getTarget() ?? null;

  const check = (): void => {
    ticking = false;
    if (fired) return;
    const target = firstTarget();
    if (!target) return;
    const rect = target.getBoundingClientRect();
    if (rect.width === 0 || rect.bottom < 0 || rect.top > window.innerHeight * 0.8) {
      return;
    }
    fired = true;
    window.removeEventListener('scroll', onScroll);
    start();
  };

  const onScroll = (): void => {
    if (ticking || fired) return;
    ticking = true;
    requestAnimationFrame(check);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  check();
}

/** Atajo para tours de un solo paso. */
export function hintOnce(sectionId: string, step: HintSingle): void {
  hintTour(sectionId, {
    key: step.key,
    doneText: step.doneText,
    skipIf: step.skipIf,
    steps: [step],
  });
}
