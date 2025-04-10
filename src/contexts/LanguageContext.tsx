
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'home': 'Home',
    'menu': 'Menu',
    'gallery': 'Gallery',
    'book': 'Book a Table',
    'contact': 'Contact',
    
    // Hero
    'viewMenu': 'View Menu',
    'bookTable': 'Book a Table',
    'authenticItalian': 'Authentic Italian Cuisine & Family Tradition',
    
    // Menu section
    'ourMenu': 'Our Menu',
    'drinks': 'Drinks',
    'appetizers': 'Appetizers',
    'pasta': 'Pasta',
    'pizza': 'Pizza',
    'coldDrinks': 'Cold Drinks',
    'lemonades': 'Lemonades',
    'appetizersDesserts': 'Appetizers & Desserts',
    'pastaRisotto': 'Pasta & Risotto',
    'freshFruitsFishNote': 'Fresh fruits and fish dishes available upon request with prior reservation.',
    'takeAwayNote': 'Take away pizza - packaging fee - 3 zł',
    
    // Reviews
    'whatGuestsSay': 'What Our Guests Say',
    'reviewsSubtitle': 'Don\'t just take our word for it. See what our valued customers have to say about their experience at Mr Lobster.',
    'viewMoreReviews': 'View more reviews on TripAdvisor',
    
    // Booking
    'bookingTitle': 'Book a Table',
    'bookingSubtitle': 'Reserve your table at Mr Lobster for an unforgettable Italian dining experience. We recommend booking in advance to secure your preferred date and time.',
    'fullName': 'Full Name',
    'email': 'Email',
    'phone': 'Phone Number',
    'guests': 'Number of Guests',
    'date': 'Date',
    'time': 'Time',
    'specialRequests': 'Special Requests',
    'anyRequests': 'Any special requests or dietary requirements?',
    'bookNow': 'Book Now',
    'sending': 'Sending...',
    'reservationSent': 'Reservation Request Sent',
    'willContact': 'We\'ll contact you shortly to confirm your reservation.',
    
    // Footer
    'familyOwnedDesc': 'Family owned authentic Italian cuisine in the heart of Krakow.',
    'quickLinks': 'Quick Links',
    'allRightsReserved': 'All rights reserved.',
    'contactUs': 'Contact Us',
    'openHours': 'Monday - Friday: 12:00 - 22:00\nSaturday - Sunday: 12:00 - 23:00',
  },
  pl: {
    // Navigation
    'home': 'Strona główna',
    'menu': 'Menu',
    'gallery': 'Galeria',
    'book': 'Zarezerwuj stolik',
    'contact': 'Kontakt',
    
    // Hero
    'viewMenu': 'Zobacz Menu',
    'bookTable': 'Zarezerwuj stolik',
    'authenticItalian': 'Autentyczna włoska kuchnia & Rodzinna tradycja',
    
    // Menu section
    'ourMenu': 'Nasze Menu',
    'drinks': 'Napoje',
    'appetizers': 'Przystawki',
    'pasta': 'Makarony',
    'pizza': 'Pizza',
    'coldDrinks': 'Zimne Napoje',
    'lemonades': 'Lemoniady',
    'appetizersDesserts': 'Przystawki & Desery',
    'pastaRisotto': 'Makaron & Risotto',
    'freshFruitsFishNote': 'Świeże owoce i dania rybne na zamówienie po wcześniejszej rezerwacji.',
    'takeAwayNote': 'Pizza na wynos - opłata za opakowanie - 3 zł',
    
    // Reviews
    'whatGuestsSay': 'Co mówią nasi goście',
    'reviewsSubtitle': 'Nie wierz nam na słowo. Zobacz, co nasi cenieni klienci mówią o swoich doświadczeniach w Mr Lobster.',
    'viewMoreReviews': 'Zobacz więcej opinii na TripAdvisor',
    
    // Booking
    'bookingTitle': 'Zarezerwuj stolik',
    'bookingSubtitle': 'Zarezerwuj stolik w Mr Lobster, aby cieszyć się niezapomnianym włoskim doświadczeniem kulinarnym. Zalecamy rezerwację z wyprzedzeniem, aby zapewnić preferowany termin.',
    'fullName': 'Imię i nazwisko',
    'email': 'Email',
    'phone': 'Numer telefonu',
    'guests': 'Liczba gości',
    'date': 'Data',
    'time': 'Godzina',
    'specialRequests': 'Specjalne prośby',
    'anyRequests': 'Specjalne prośby lub wymagania dietetyczne?',
    'bookNow': 'Zarezerwuj teraz',
    'sending': 'Wysyłanie...',
    'reservationSent': 'Prośba o rezerwację wysłana',
    'willContact': 'Skontaktujemy się wkrótce, aby potwierdzić rezerwację.',
    
    // Footer
    'familyOwnedDesc': 'Rodzinna restauracja z autentyczną włoską kuchnią w sercu Krakowa.',
    'quickLinks': 'Szybkie linki',
    'allRightsReserved': 'Wszelkie prawa zastrzeżone.',
    'contactUs': 'Kontakt',
    'openHours': 'Poniedziałek - Piątek: 12:00 - 22:00\nSobota - Niedziela: 12:00 - 23:00',
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
