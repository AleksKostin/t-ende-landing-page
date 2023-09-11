import { useTranslation } from 'react-i18next';
import './LangSwitcher.scss';

const LangSwitcher = () => {
  const { t } = useTranslation();

  return (
    <div className="lang-switcher">
      <button type="button" className="lang-btn lang-link">
        {t('rus')}
      </button>
      <button type="button" className="lang-btn">
        {t('en')}
      </button>
    </div>
  );
};

export default LangSwitcher;
