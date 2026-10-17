import { describe, expect, it } from 'vitest';
import { META_LOCALIZED, OG_IMAGE, SITE_NAME, SITE_URL } from '../src/lib/seo';

describe('seo', () => {
  it('SITE_URL no termina en barra', () => {
    expect(SITE_URL.startsWith('http')).toBe(true);
    expect(SITE_URL.endsWith('/')).toBe(false);
  });

  it('SITE_NAME está definido', () => {
    expect(SITE_NAME).toBeTruthy();
  });

  it('META_LOCALIZED cubre ES y EN con title y description', () => {
    for (const locale of ['es', 'en'] as const) {
      expect(META_LOCALIZED[locale].title.length).toBeGreaterThan(10);
      expect(META_LOCALIZED[locale].description.length).toBeGreaterThan(40);
    }
    expect(META_LOCALIZED.es.description).not.toBe(META_LOCALIZED.en.description);
  });

  it('la tarjeta OG es una imagen social 1200x630 tipada', () => {
    expect(OG_IMAGE.url.startsWith(SITE_URL)).toBe(true);
    expect(OG_IMAGE.url).toContain('/og-image.png');
    expect(OG_IMAGE.width).toBe(1200);
    expect(OG_IMAGE.height).toBe(630);
    expect(OG_IMAGE.type).toBe('image/png');
    expect(OG_IMAGE.alt.length).toBeGreaterThan(10);
  });
});
