import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import lable from '../../assets/icons/lable.svg';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div id="navbar">
      <div className="container">
        <div className="navbar-conteiner">
          <img
            src={lable}
            alt="brand"
            className="navbar-lable"
          />
          <div className="navbar-links">
            <button
              className="navbar-btn navbar-link"
              type="button"
            >
              {t('services')}
            </button>
            <button
              className="navbar-btn navbar-link"
              type="button"
            >
              {t('articles')}
            </button>
            <button
              className="navbar-btn navbar-link"
              type="button"
            >
              {t('aboutMe')}
            </button>
            <button
              className="navbar-btn"
              type="button"
            >
              {t('contacts')}
            </button>
          </div>
          <div className="navbar-lng">
            <LangSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
