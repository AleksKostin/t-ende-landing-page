import { useTranslation } from 'react-i18next';
import './LangSwitcher.scss';
import { Locales } from './data';

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const onToggleRu = () => {
    i18n.changeLanguage(Locales.ru);
  };

  const onToggleEn = () => {
    i18n.changeLanguage(Locales.en);
  };

  return (
    <div className="lang-switcher">
      <button
        type="button"
        className="lang-btn"
        onClick={onToggleRu}
      >
        {t('rus')}
      </button>
      <button
        type="button"
        className="lang-btn"
        onClick={onToggleEn}
      >
        {t('en')}
      </button>
    </div>
  );
};

export default LangSwitcher;
