import { beforeEach, describe, expect, it } from 'vitest';
import { initNavbar } from '../src/scripts/navbar';
import { initSkills } from '../src/scripts/skills';

describe('initNavbar', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <nav data-navbar>
        <button data-nav-toggle aria-expanded="false" aria-controls="nav-drawer">
          <span data-nav-icon="menu"></span>
          <span data-nav-icon="x" hidden></span>
        </button>
        <div id="nav-drawer" data-nav-drawer>
          <a href="#about">Sobre mí</a>
        </div>
      </nav>`;
    document.body.style.overflow = '';
  });

  it('abre y cierra el menú móvil sincronizando atributos y scroll', () => {
    initNavbar();
    const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]')!;
    const drawer = document.querySelector<HTMLElement>('[data-nav-drawer]')!;
    const iconMenu = document.querySelector<HTMLElement>('[data-nav-icon="menu"]')!;
    const iconClose = document.querySelector<HTMLElement>('[data-nav-icon="x"]')!;

    toggle.click();
    expect(drawer.classList.contains('is-open')).toBe(true);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(iconMenu.hidden).toBe(true);
    expect(iconClose.hidden).toBe(false);
    expect(document.body.style.overflow).toBe('hidden');

    toggle.click();
    expect(drawer.classList.contains('is-open')).toBe(false);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(document.body.style.overflow).toBe('');
  });

  it('cierra el menú al hacer click en un enlace interno', () => {
    initNavbar();
    const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]')!;
    const drawer = document.querySelector<HTMLElement>('[data-nav-drawer]')!;
    toggle.click();
    drawer.querySelector('a')!.click();
    expect(drawer.classList.contains('is-open')).toBe(false);
  });
});

describe('initSkills', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button type="button" data-skills-toggle aria-expanded="false" aria-controls="skills-extra-tools">
        <span data-skills-label-more>Ver más</span>
        <span data-skills-label-less hidden>Ver menos</span>
        <span data-skills-chevron></span>
      </button>
      <div id="skills-extra-tools" class="expandable"></div>`;
  });

  it('alterna la expansión y las etiquetas', () => {
    initSkills();
    const button = document.querySelector<HTMLButtonElement>('[data-skills-toggle]')!;
    const panel = document.getElementById('skills-extra-tools')!;
    const more = document.querySelector<HTMLElement>('[data-skills-label-more]')!;
    const less = document.querySelector<HTMLElement>('[data-skills-label-less]')!;

    expect(panel.classList.contains('is-open')).toBe(false);

    button.click();
    expect(panel.classList.contains('is-open')).toBe(true);
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(more.hidden).toBe(true);
    expect(less.hidden).toBe(false);

    button.click();
    expect(panel.classList.contains('is-open')).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
