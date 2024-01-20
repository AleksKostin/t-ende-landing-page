export const Locales = {
  ru: 'ru',
  en: 'en',
};

export const clientLang = document.getElementById('root')
  .hasChildNodes() ? (navigator.language || navigator.userLanguage).slice(0, 2) : Locales.ru;
