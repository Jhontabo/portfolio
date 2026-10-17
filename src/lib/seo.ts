import type { Locale } from '../i18n';

// Fuente única de verdad: el `site` definido en astro.config.mjs
// (Astro lo expone como import.meta.env.SITE). El fallback solo aplica
// fuera del runtime de Astro (p. ej. tests unitarios).
const SITE_FALLBACK = 'https://jhon-tajumbina.vercel.app';

export const SITE_URL = (import.meta.env.SITE ?? SITE_FALLBACK).replace(/\/$/, '');

export const SITE_NAME = 'Jhon Tajumbina Portfolio';

export const META_LOCALIZED: Record<Locale, { title: string; description: string }> = {
  es: {
    title: 'Jhon Tajumbina | Software Engineer & Digital Trafficker Ads',
    description:
      'Software Engineer y Pitcher de Marketing (Meta Ads) en Colombia. Desarrollo de aplicaciones web, móviles y campañas de alto impacto. Conoce mis proyectos.',
  },
  en: {
    title: 'Jhon Tajumbina | Software Engineer & Digital Trafficker Ads',
    description:
      'Software Engineer and Marketing Pitcher (Meta Ads) in Colombia. I develop custom web and mobile apps and high-impact ad campaigns. Explore my projects.',
  },
} as const;

export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  type: 'image/png',
  alt: 'Jhon Tajumbina — Software Engineer & Digital Trafficker Ads',
} as const;
