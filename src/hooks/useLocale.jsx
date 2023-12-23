import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import JsonDataRu from '../data/dataRu.json';
import JsonDataEn from '../data/dataEn.json';
import { Locales } from '../components/LangSwitcher/data';
import useStore from './useStore';
import { clientLang } from '../app/initialState';

const localesDataList = {
  [Locales.ru.lang]: JsonDataRu,
  [Locales.en.lang]: JsonDataEn,
};

const useLocale = () => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(localesDataList[clientLang]);
  const [store] = useStore();

  useEffect(() => {
    const { lang } = store;

    setLocale(localesDataList[lang]);
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [store.lang]);

  return locale;
};

export default useLocale;
