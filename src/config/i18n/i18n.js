import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { clientLang } from 'app/initialState';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: clientLang,
    fallbackLng: 'ru',
    backend: {
      loadPath: '/landing/locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
