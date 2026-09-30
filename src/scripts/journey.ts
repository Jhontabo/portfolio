export function initJourney(): void {
  const root = document.querySelector<HTMLElement>('[data-journey]');
  if (!root) return;

  const setExpanded = (entry: HTMLElement, expanded: boolean): void => {
    entry.dataset.expanded = String(expanded);
    const card = entry.querySelector<HTMLElement>('[data-journey-card]');
    if (card) card.hidden = !expanded;
    const bubble = entry.querySelector<HTMLElement>('[data-journey-toggle]');
    bubble?.setAttribute('aria-expanded', String(expanded));
  };

  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    const closer = target.closest<HTMLElement>('[data-journey-close]');
    if (closer) {
      event.stopPropagation();
      const entry = closer.closest<HTMLElement>('[data-journey-entry]');
      if (!entry) return;
      setExpanded(entry, false);
      const bubble = entry.querySelector<HTMLButtonElement>('[data-journey-toggle]');
      bubble?.focus();
      return;
    }

    const bubble = target.closest<HTMLElement>('[data-journey-toggle]');
    if (!bubble) return;
    const id = bubble.getAttribute('aria-controls');
    const card = id ? root.querySelector<HTMLElement>(`#${CSS.escape(id)}`) : null;
    const entry = card?.closest<HTMLElement>('[data-journey-entry]') ?? null;
    if (entry) setExpanded(entry, true);
  });
}
