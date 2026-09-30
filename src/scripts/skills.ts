export function initSkills(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-skills-toggle]').forEach((button) => {
    const panel = document.getElementById(button.getAttribute('aria-controls') ?? '');
    if (!panel) return;

    const more = button.querySelector<HTMLElement>('[data-skills-label-more]');
    const less = button.querySelector<HTMLElement>('[data-skills-label-less]');
    const chevron = button.querySelector<HTMLElement>('[data-skills-chevron]');

    const setExpanded = (expanded: boolean): void => {
      button.setAttribute('aria-expanded', String(expanded));
      panel.classList.toggle('is-open', expanded);
      chevron?.classList.toggle('rotate-180', expanded);
      if (more) more.hidden = expanded;
      if (less) less.hidden = !expanded;
    };

    setExpanded(false);
    button.addEventListener('click', () => {
      setExpanded(button.getAttribute('aria-expanded') !== 'true');
    });
  });
}
