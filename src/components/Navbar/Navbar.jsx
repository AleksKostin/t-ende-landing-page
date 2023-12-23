import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Label } from 'assets/icons/label.svg';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import routs from 'config/routeConfig/routeConfig';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 1,
    rootMargin: '170px',
  });
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const refInput = useRef();

  useEffect(() => {
    if (!inView && isCheckboxChecked) {
      refInput.current.checked = false;
    }
  }, [inView, isCheckboxChecked]);

  const handleChange = (e) => {
    setIsCheckboxChecked(() => e.target.checked);
  };

  return (
    <div id="header" className="header-wrapper">
      <div className="content-wrapper header__content">
        <Link to={routs.mainPath} className="header__label">
          <Label />
        </Link>
        <div className="header__links">
          <Link to={routs.servicesPath} className="header__link">
            {t('services')}
          </Link>
          <Link to={routs.articlesPath} className="header__link">
            {t('articles')}
          </Link>
          <Link to={routs.aboutPath} className="header__link">
            {t('aboutMe')}
          </Link>
          <Link to={routs.contactPath} className="header__link">
            {t('contacts')}
          </Link>
        </div>
        <LangSwitcher />
        <div className="menu">
          <input ref={refInput} id="menu-toggle" type="checkbox" onChange={handleChange} />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="menu-toggle" className="menu__btn">
            <span className="menu__icon" />
          </label>
          <ul ref={ref} className="menu__box">
            <li className="menu__item">
              <Link to={routs.servicesPath}>
                {t('services')}
              </Link>
            </li>
            <li className="menu__item">
              <Link to={routs.articlesPath}>
                {t('articles')}
              </Link>
            </li>
            <li className="menu__item">
              <Link to={routs.aboutPath}>
                {t('aboutMe')}
              </Link>
            </li>
            <li className="menu__item">
              <Link to={routs.contactPath}>
                {t('contacts')}
              </Link>
            </li>
          </ul>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="menu-toggle" className="menu__overlay">
            <span />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
