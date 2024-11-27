import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Initialize i18n
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    supportedLngs: ['en', 'cz'], // Supported languages
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Translation file location
    },
    detection: {
      order: ['querystring', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
