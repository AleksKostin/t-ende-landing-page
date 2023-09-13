import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import App from './app/App';
import './config/i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
