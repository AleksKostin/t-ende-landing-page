import { useTranslation } from 'react-i18next';
import './LangSwitcher.scss';

const LangSwitcher = ({ onDispatch }) => {
  const { t, i18n } = useTranslation();

  const onToggleRu = () => {
    i18n.changeLanguage('ru');
    onDispatch({ type: 'ru' });
  };

  const onToggleEn = () => {
    i18n.changeLanguage('en');
    onDispatch({ type: 'en' });
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
