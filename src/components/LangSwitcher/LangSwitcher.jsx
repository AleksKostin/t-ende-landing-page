import { useTranslation } from 'react-i18next';
import './LangSwitcher.scss';

const LangSwitcher = () => {
  const { t } = useTranslation();

  return (
    <div className="lng-switcher">
      <button type="button" className="lng-btn lng-link">
        {t('rus')}
      </button>
      <button type="button" className="lng-btn">
        {t('en')}
      </button>
    </div>
  );
};

export default LangSwitcher;
