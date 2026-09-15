"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "es" | "en";

interface Translations {
  nav: {
    home: string;
    journey: string;
    portfolio: string;
  };
  hero: {
    role: string;
    roles: string[];
    viewProjects: string;
    downloadCV: string;
    contactMe: string;
  };
  projects: {
    title: string;
    demo: string;
    github: string;
  };
  skills: {
    title: string;
    languages: string;
    frontend: string;
    backend: string;
    mobile: string;
    tools: string;
    marketing: string;
    showMore: string;
    showLess: string;
  };
  certificates: {
    title: string;
    showMore: string;
    showLess: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    tabs: {
      projects: string;
      certificates: string;
      skills: string;
    };
    viewCredential: string;
    setupTitle: string;
    setupDescription: string;
  };
  journey: {
    title: string;
    subtitle: string;
    viewGithub: string;
    githubProfile: string;
  };

  footer: {
    rights: string;
    madeWith: string;
  };
}

import esTranslations from "../messages/es.json";
import enTranslations from "../messages/en.json";

const translations: Record<Locale, Translations> = {
  es: esTranslations as Translations,
  en: enTranslations as Translations,
};

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const defaultContext: LocaleContextType = {
  locale: "es",
  setLocale: () => {},
  t: translations.es,
};

const LocaleContext = createContext<LocaleContextType>(defaultContext);

export function LocaleProvider({
  children,
  initialLocale = "es",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
