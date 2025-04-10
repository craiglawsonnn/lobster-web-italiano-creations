
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'home': 'Home',
    'menu': 'Menu',
    'gallery': 'Gallery',
    'book': 'Book a Table',
    'contact': 'Contact',
    'viewMenu': 'View Menu',
    'bookTable': 'Book a Table',
    'aboutUs': 'About Us',
    'reviews': 'Reviews',
    'familyOwned': 'Family Owned',
    'authenticItalian': 'Authentic Italian Cuisine & Family Tradition',
  },
  pl: {
    'home': 'Strona główna',
    'menu': 'Menu',
    'gallery': 'Galeria',
    'book': 'Zarezerwuj stolik',
    'contact': 'Kontakt',
    'viewMenu': 'Zobacz Menu',
    'bookTable': 'Zarezerwuj stolik',
    'aboutUs': 'O nas',
    'reviews': 'Opinie',
    'familyOwned': 'Rodzinna restauracja',
    'authenticItalian': 'Autentyczna włoska kuchnia & Rodzinna tradycja',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
