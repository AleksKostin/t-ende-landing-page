import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import JsonDataRu from '../data/dataRu.json';
import JsonDataEn from '../data/dataEn.json';
import { Locales } from '../components/LangSwitcher/data';
import { clientLang } from '../app/initialState';

const localesDataList = {
  [Locales.ru]: JsonDataRu,
  [Locales.en]: JsonDataEn,
};

const useLocale = () => {
  const [localeData, setLocaleData] = useState(localesDataList[clientLang]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleLanguageChange = () => {
      setLocaleData(localesDataList[i18n.language]);
      document.documentElement.lang = i18n.language;
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return localeData;
};

export default useLocale;
