import { Locales } from '../components/LangSwitcher/data';

export const clientLang = (navigator.language || navigator.userLanguage).slice(0, 2);

export const initialState = {
  lang: Locales[clientLang].lang,
};
