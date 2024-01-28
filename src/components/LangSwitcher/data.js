import { isRenderingOnClient } from 'config/global';

export const Locales = {
  ru: 'ru',
  en: 'en',
};

export const clientLang = isRenderingOnClient
  ? (navigator.language || navigator.userLanguage).slice(0, 2) : Locales.ru;
