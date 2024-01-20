import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import './app/styles/index.scss';
import App from './app/App';
import i18n from './config/i18n/i18n';
import { Locales } from './components/LangSwitcher/data';

let root = document.getElementById('root');
if (root.hasChildNodes()) {
  root = ReactDOM.hydrateRoot(document.getElementById('root'));
} else {
  root = ReactDOM.createRoot(document.getElementById('root'));
  i18n.changeLanguage(Locales.ru);
}

root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </BrowserRouter>,
);
