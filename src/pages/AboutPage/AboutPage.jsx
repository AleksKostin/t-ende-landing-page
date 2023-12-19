import './AboutPage.scss';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import avatar from 'assets/pictures/aboutPage-avatar.jpg';
import { Link } from 'react-router-dom';
import routs from 'config/routeConfig/routeConfig';

const AboutPage = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="content-wrapper">
        <Element name="#about-page">
          <h2 id="about-page" className="about__title">
            {t('aboutMe')}
          </h2>
        </Element>
        <div className="about__box">
          <div className="about__content">
            <p className="about__paragraph">
              {data.paragraph}
            </p>
            <p className="about__contact-me">
              {data.contactMe}
            </p>
            <Link to={routs.contactPath} className="about__contacts">
              {t('myContacts')}
            </Link>
          </div>
          <img src={avatar} alt="" className="about__img" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
