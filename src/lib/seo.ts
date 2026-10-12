import type { Locale } from '../i18n';

export const SITE_URL = 'https://jhon-tajumbina.vercel.app';

export const SITE_NAME = 'Jhon Tajumbina Portfolio';

export const META = {
  title: 'Jhon Tajumbina | Software Engineer & Digital Trafficker Ads',
  description:
    'Software Engineer y Pitcher de Marketing (Meta Ads) en Colombia. Desarrollo de aplicaciones web, móviles y campañas de alto impacto. Conoce mis proyectos.',
} as const;

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

export const OG_IMAGE = `${SITE_URL}/Desing-final-1200.webp`;
