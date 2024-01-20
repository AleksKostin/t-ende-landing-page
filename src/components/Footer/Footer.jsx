import './Footer.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from 'assets/icons/designerLogo.svg';
import React from 'react';

const Footer = React.forwardRef((props, ref) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div className="footer" ref={ref}>
      <div className="content-wrapper">
        <div className="footer__box">
          <div className="footer__content">
            <p className="footer__rights">{data.paragraph}</p>
            <div className="footer__designer">
              <Logo />
              <div className="footer__designer-contacts">
                <p className="footer__text-developed">{t('websiteDeveloped')}</p>
                <a className="footer__link-developed" href="https://www.instagram.com/mn.artdesign">
                  <p className="footer__contact-developed">{t('instagramDesigner')}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
