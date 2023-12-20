import './ContactPage.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as InstagramContactPage } from 'assets/icons/instagram.svg';
import { ReactComponent as WhatsAppContactPage } from 'assets/icons/whatsApp.svg';
import { ReactComponent as Location } from 'assets/icons/location.svg';
import { ReactComponent as Email } from 'assets/icons/email.svg';
import { Element } from 'react-scroll';

const ContactPage = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="content-wrapper">
        <Element name="#contact-page">
          <h2 id="contact-page" className="contact__title">
            {t('contacts')}
          </h2>
        </Element>
        <div className="contact__box">
          <p className="contact__paragraph">
            {data.paragraph}
          </p>
          <div className="contact__contacts-box">
            <a
              href="#1"
              className="contact__link"
            >
              <Location />
              {t('location')}
            </a>
            <a
              href="#1"
              className="contact__link"
            >
              <InstagramContactPage />
              {t('instagram')}
            </a>
            <a
              href="#1"
              className="contact__link"
            >
              <Email />
              {t('email')}
            </a>
            <a
              href="#1"
              className="contact__link"
            >
              <WhatsAppContactPage />
              {t('whatsApp')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
