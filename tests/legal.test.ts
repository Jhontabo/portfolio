import { describe, expect, it } from 'vitest';
import {
  LEGAL_DOCS,
  LEGAL_SLUGS,
  LEGAL_VERSIONS,
  legalContent,
  legalPath,
} from '../src/data/legal';
import { locales } from '../src/i18n';

describe('legal', () => {
  it('cada idioma tiene los tres documentos con secciones y versión', () => {
    for (const locale of locales) {
      for (const doc of LEGAL_DOCS) {
        expect(legalContent[locale][doc].sections.length).toBeGreaterThan(3);
        expect(LEGAL_VERSIONS[doc]).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    }
  });

  it('ES y EN tienen el mismo número de secciones por documento', () => {
    for (const doc of LEGAL_DOCS) {
      expect(legalContent.en[doc].sections.length).toBe(legalContent.es[doc].sections.length);
    }
  });

  it('las rutas son únicas y localizadas', () => {
    expect(legalPath('es', 'privacy')).toBe('/es/politica-de-privacidad/');
    expect(legalPath('en', 'terms')).toBe('/en/terms-and-conditions/');
    const slugs = locales.flatMap((l) => Object.values(LEGAL_SLUGS[l]));
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
