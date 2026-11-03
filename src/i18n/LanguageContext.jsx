import { createContext, useContext, useMemo } from 'react';
import { translate } from './translations.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ language, onLanguageChange, children }) {
  const value = useMemo(() => ({
    language,
    setLanguage: onLanguageChange,
    t: (key) => translate(language, key),
  }), [language, onLanguageChange]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
