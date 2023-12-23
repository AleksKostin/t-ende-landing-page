import { useTranslation } from 'react-i18next';
import './LangSwitcher.scss';
import useStore from '../../hooks/useStore';
import { Locales } from './data';

const LangSwitcher = () => {
  const { t } = useTranslation();
  const [, updateStore] = useStore();

  const onToggleRu = () => {
    updateStore(Locales.ru);
  };

  const onToggleEn = () => {
    updateStore(Locales.en);
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
