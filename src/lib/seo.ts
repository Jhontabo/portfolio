import type { Locale } from '../i18n';

export const SITE_URL = 'https://jhon-tajumbina.vercel.app';

export const SITE_NAME = 'Jhon Tajumbina Portfolio';

export const META = {
  title: 'Jhon Tajumbina | Full-Stack Developer',
  description:
    'Full-Stack Developer | React · Express · Laravel - Estudiante de Ingeniería de Sistemas',
} as const;

export const META_LOCALIZED: Record<Locale, { title: string; description: string }> = {
  es: {
    title: 'Jhon Tajumbina | Full-Stack Developer',
    description:
      'Full-Stack Developer | React · Express · Laravel - Estudiante de Ingeniería de Sistemas de Colombia. Apps móviles, web y sistemas a medida.',
  },
  en: {
    title: 'Jhon Tajumbina | Full-Stack Developer',
    description:
      'Full-Stack Developer | React · Express · Laravel - Systems Engineer from Colombia. Mobile apps, websites and custom systems.',
  },
} as const;

export const OG_IMAGE = `${SITE_URL}/Desing-final-1200.webp`;
