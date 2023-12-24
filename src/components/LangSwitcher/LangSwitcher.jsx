import { useTranslation } from 'react-i18next';
import './LangSwitcher.scss';

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const onToggleRu = () => {
    i18n.changeLanguage('ru');
  };

  const onToggleEn = () => {
    i18n.changeLanguage('en');
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
