import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "de" | "fr" | "ar" | "zh" | "pl" | "tr" | "it" | "bg" | "ru" | "es" | "pt";

export const SUPPORTED_LANGUAGES: Language[] = ["en", "de", "fr", "it", "ar", "zh", "pl", "tr", "bg", "ru", "es", "pt"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const STORAGE_KEY = "alessandro-studio-language";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectInitialLanguage = (): Language => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) return stored;
  } catch {
    /* localStorage unavailable (private mode, etc.) — fall through to default */
  }
  const browserLang = (typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "en") as Language;
  return SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  };

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
