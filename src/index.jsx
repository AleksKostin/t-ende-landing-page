import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import './app/styles/index.scss';
import { isRenderingOnClient } from 'config/global';
import App from './app/App';
import i18n from './config/i18n/i18n';
import { Locales } from './components/LangSwitcher/data';

const rootElem = document.getElementById('root');
let root = null;

if (isRenderingOnClient) {
  root = ReactDOM.hydrateRoot(rootElem);
} else if (rootElem) {
  root = ReactDOM.createRoot(rootElem);
  i18n.changeLanguage(Locales.ru);
} else {
  console.error('The root element is missing!');
  const rootElemError = document.createElement('div');
  rootElemError.id = 'root';
  document.body.append(rootElemError);
  root = ReactDOM.createRoot(rootElemError);
  i18n.changeLanguage(Locales.ru);
}

root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
);
