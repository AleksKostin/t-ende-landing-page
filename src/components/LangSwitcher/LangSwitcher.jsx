import { useTranslation } from 'react-i18next';
import './LangSwitcher.scss';
import store from '../../app/store';
import { Locales } from './data';

const LangSwitcher = () => {
  const { t } = useTranslation();

  const onToggleRu = () => {
    store.set(Locales.ru);
  };

  const onToggleEn = () => {
    store.set(Locales.en);
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
