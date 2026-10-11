import { hintOnce } from './hint';

export function initJourneyTour(): void {
  const section = document.getElementById('journey');
  if (!section) return;

  hintOnce('journey', {
    key: 'jtour-seen-v1',
    getTarget: () =>
      [...document.querySelectorAll<HTMLElement>('[data-origin-circle]')].find(
        (el) => el.getBoundingClientRect().width > 0,
      ) ?? null,
    title: section.getAttribute('data-tour-title') ?? '',
    description: section.getAttribute('data-tour-desc') ?? '',
    doneText: section.getAttribute('data-tour-done') ?? 'OK',
    skipIf: () =>
      document.querySelector('[data-journey-toggle][aria-expanded="true"]') !== null,
  });
}
