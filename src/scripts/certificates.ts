export const INITIAL_CERT_COUNT = 4;

export function initCertificates(): void {
  const button = document.querySelector<HTMLButtonElement>('[data-cert-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-cert-panel]');
  const label = document.querySelector<HTMLElement>('[data-cert-label-more]');
  const labelLess = document.querySelector<HTMLElement>('[data-cert-label-less]');
  if (!button || !panel) return;

  const setExpanded = (expanded: boolean): void => {
    button.setAttribute('aria-expanded', String(expanded));
    panel.classList.toggle('is-open', expanded);
    if (label) label.hidden = expanded;
    if (labelLess) labelLess.hidden = !expanded;
  };

  setExpanded(false);
  button.addEventListener('click', () => {
    setExpanded(button.getAttribute('aria-expanded') !== 'true');
  });
}
