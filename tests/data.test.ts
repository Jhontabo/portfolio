import { describe, expect, it } from 'vitest';
import { projects } from '../src/data/projects';
import { certificates, certificatesFolderUrl, INITIAL_CERT_COUNT } from '../src/data/certificates';
import { journeyTimeline } from '../src/data/journey';
import { CATEGORY_ORDER, skills, VISIBLE_SKILL_COUNT } from '../src/data/skills';
import type { JourneyCategory } from '../src/data/types';

const JOURNEY_CATEGORIES: JourneyCategory[] = ['education', 'work', 'research', 'marketing'];

function ids<T extends { id: number }>(items: T[]): number[] {
  return items.map((item) => item.id);
}

function expectUnique(values: number[]): void {
  expect(new Set(values).size).toBe(values.length);
}

describe('proyectos', () => {
  it('los ids son únicos', () => expectUnique(ids(projects)));

  it('cada proyecto tiene contenido obligatorio', () => {
    for (const project of projects) {
      expect(project.name).toBeTruthy();
      expect(project.description.length).toBeGreaterThan(20);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.demo === '#' || project.demo.startsWith('http')).toBe(true);
      expect(project.github === '#' || project.github.startsWith('https://github.com/')).toBe(
        true,
      );
    }
  });

  it('las imágenes importadas exponen un src válido', () => {
    const withImage = projects.filter((project) => project.image);
    expect(withImage.length).toBeGreaterThan(0);
    for (const project of withImage) {
      expect(project.image?.src).toBeTruthy();
      expect(project.image?.width).toBeGreaterThan(0);
      expect(project.image?.height).toBeGreaterThan(0);
      expect(project.imageAlt).toBeTruthy();
    }
  });
});

describe('certificados', () => {
  it('los ids son únicos', () => expectUnique(ids(certificates)));

  it('cada certificado tiene contenido y enlace de Drive válido', () => {
    for (const cert of certificates) {
      expect(cert.name).toBeTruthy();
      expect(cert.nameEn).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
      expect(cert.link).toMatch(/drive\.google\.com\/file\/d\/[^/]+\//);
    }
  });

  it('la carpeta de Drive y el conteo visible están definidos', () => {
    expect(certificatesFolderUrl).toContain('drive.google.com/drive/folders/');
    expect(INITIAL_CERT_COUNT).toBeGreaterThan(0);
    expect(INITIAL_CERT_COUNT).toBeLessThanOrEqual(certificates.length);
  });
});

describe('journey', () => {
  it('los ids son únicos', () => expectUnique(ids(journeyTimeline)));

  it('cada entrada tiene fechas, títulos y categoría válida', () => {
    for (const entry of journeyTimeline) {
      expect(JOURNEY_CATEGORIES).toContain(entry.category);
      expect(entry.dateEs).toBeTruthy();
      expect(entry.dateEn).toBeTruthy();
      expect(entry.titleEs).toBeTruthy();
      expect(entry.titleEn).toBeTruthy();
      expect(entry.descriptionEs.length).toBeGreaterThan(20);
      expect(entry.descriptionEn.length).toBeGreaterThan(20);
    }
  });

  it('empieza en orden cronológico por año', () => {
    expect(journeyTimeline[0].year).toBe('2021');
    expect(journeyTimeline.at(-1)?.year).toBe('2026');
  });
});

describe('skills', () => {
  it('CATEGORY_ORDER cubre las seis categorías en orden', () => {
    expect(CATEGORY_ORDER).toEqual([
      'languages',
      'frontend',
      'backend',
      'mobile',
      'tools',
      'marketing',
    ]);
  });

  it('cada categoría tiene habilidades con nombre e icono', () => {
    for (const category of CATEGORY_ORDER) {
      expect(skills[category].length).toBeGreaterThan(0);
      for (const skill of skills[category]) {
        expect(skill.name).toBeTruthy();
        expect(skill.icon).toBeTruthy();
      }
    }
  });

  it('VISIBLE_SKILL_COUNT es positivo', () => {
    expect(VISIBLE_SKILL_COUNT).toBeGreaterThan(0);
  });
});
