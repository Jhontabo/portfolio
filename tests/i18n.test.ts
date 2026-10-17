import { describe, expect, it } from 'vitest';
import { defaultLocale, htmlLang, isLocale, locales, messages, ogLocale, t } from '../src/i18n';

function flatKeys(value: unknown, prefix = ''): string[] {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return [prefix];
  return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
    flatKeys(child, prefix ? `${prefix}.${key}` : key),
  );
}

describe('i18n', () => {
  it('expone los idiomas soportados con ES por defecto', () => {
    expect(locales).toEqual(['es', 'en']);
    expect(defaultLocale).toBe('es');
  });

  it('isLocale valida correctamente', () => {
    expect(isLocale('es')).toBe(true);
    expect(isLocale('en')).toBe(true);
    expect(isLocale('fr')).toBe(false);
    expect(isLocale(undefined)).toBe(false);
    expect(isLocale('')).toBe(false);
  });

  it('t() devuelve el diccionario del idioma', () => {
    expect(t('es')).toBe(messages.es);
    expect(t('en')).toBe(messages.en);
  });

  it('define lang HTML y og:locale para cada idioma', () => {
    expect(htmlLang).toEqual({ es: 'es-CO', en: 'en' });
    expect(ogLocale).toEqual({ es: 'es_CO', en: 'en_US' });
  });

  it('ES y EN tienen exactamente las mismas claves (sin traducciones huérfanas)', () => {
    expect(new Set(flatKeys(messages.en))).toEqual(new Set(flatKeys(messages.es)));
  });

  it('las categorías de journey coinciden con los datos', () => {
    for (const locale of locales) {
      expect(Object.keys(t(locale).journey.categories)).toEqual([
        'education',
        'work',
        'research',
        'marketing',
      ]);
    }
  });
});
