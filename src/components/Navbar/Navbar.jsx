import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import lable from 'assets/icons/lable.svg';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div id="header" className="header-wrapper">
      <div className="content-wrapper header__content">
        <img src={lable} alt="brand" className="header__lable" />
        <div className="header__links">
          <a href="#1" className="header__link">
            {t('services')}
          </a>
          <a href="#1" className="header__link">
            {t('articles')}
          </a>
          <a href="#1" className="header__link">
            {t('aboutMe')}
          </a>
          <a href="#1" className="header__link">
            {t('contacts')}
          </a>
        </div>
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
