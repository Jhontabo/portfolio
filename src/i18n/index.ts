import es from './es.json';
import en from './en.json';

export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export type Messages = typeof es;

export const defaultLocale: Locale = 'es';

export const messages: Record<Locale, Messages> = { es, en };

export const htmlLang: Record<Locale, string> = { es: 'es-CO', en: 'en' };

export const ogLocale: Record<Locale, string> = { es: 'es_CO', en: 'en_US' };

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function t(locale: Locale): Messages {
  return messages[locale];
}
