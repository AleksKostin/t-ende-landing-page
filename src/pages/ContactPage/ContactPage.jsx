import './ContactPage.scss';
import { useTranslation } from 'react-i18next';
import Instagram from 'assets/icons/instagram-contact-page.svg';
import WhatsApp from 'assets/icons/whatsApp-contact-page.svg';
import Location from 'assets/icons/location.svg';
import Email from 'assets/icons/email.svg';
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
              <img src={Location} alt="Location" className="contact__link-img" />
              {t('location')}
            </a>
            <a
              href="#1"
              className="contact__link"
            >
              <img src={Instagram} alt="Instagram" className="contact__link-img" />
              {t('instagram')}
            </a>
            <a
              href="#1"
              className="contact__link"
            >
              <img src={Email} alt="Email" className="contact__link-img" />
              {t('email')}
            </a>
            <a
              href="#1"
              className="contact__link"
            >
              <img src={WhatsApp} alt="WhatsApp" className="contact__link-img" />
              {t('whatsApp')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
