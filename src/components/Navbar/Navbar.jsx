import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import label from 'assets/icons/lable.svg';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
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
      refInput.current.click();
    }
  }, [inView, isCheckboxChecked]);

  const handleChange = (e) => {
    setIsCheckboxChecked(() => e.target.checked);
  };

  return (
    <div id="header" className="header-wrapper">
      <div className="content-wrapper header__content">
        <img src={label} alt="brand" className="header__label" />
        <div className="header__links">
          <a href="#services-page" className="header__link">
            {t('services')}
          </a>
          <a href="#1" className="header__link">
            {t('articles')}
          </a>
          <a href="#about-page" className="header__link">
            {t('aboutMe')}
          </a>
          <a href="#1" className="header__link">
            {t('contacts')}
          </a>
        </div>
        <LangSwitcher />
        <div className="menu">
          <input ref={refInput} id="menu-toggle" type="checkbox" onChange={handleChange} />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="menu-toggle" className="menu__btn">
            <span />
          </label>
          <ul ref={ref} className="menu__box">
            <li className="menu__item">
              <a href="#services-page">
                {t('services')}
              </a>
            </li>
            <li className="menu__item">
              <a href="#1">
                {t('articles')}
              </a>
            </li>
            <li className="menu__item">
              <a href="#about-page">
                {t('aboutMe')}
              </a>
            </li>
            <li className="menu__item">
              <a href="#1">
                {t('contacts')}
              </a>
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
