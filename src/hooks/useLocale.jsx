import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import JsonDataRu from '../data/dataRu.json';
import JsonDataEn from '../data/dataEn.json';
import store from '../app/store';
import { Locales } from '../components/LangSwitcher/data';

const langCode = (navigator.language || navigator.userLanguage).slice(0, 2);
const initData = langCode === Locales.ru.lang ? JsonDataRu : JsonDataEn;

// Значения по умолчанию
store.set(Locales[langCode]);
document.documentElement.lang = langCode;

const useLocale = () => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(initData);

  useEffect(() => {
    // Значение по умолчанию
    i18n.changeLanguage(Locales[langCode].lang);

    const switchLocale = (e) => {
      const { lang } = e.detail;

      if (lang === Locales.ru.lang) {
        setLocale(JsonDataRu);
      } else if (lang === Locales.en.lang) {
        setLocale(JsonDataEn);
      }

      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
    };

    window.addEventListener('updateLocale', switchLocale);

    return () => {
      window.removeEventListener('updateLocale', switchLocale);
    };
  }, []);

  return locale;
};

export default useLocale;
