import { useEffect, useState } from 'react';
import './ServiceDetailsPage.scss';
import { useTranslation } from 'react-i18next';
import {
  Link,
  useParams,
} from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import routs from 'config/routeConfig/routeConfig';
import { Helmet } from 'react-helmet';

const ServiceDetailsPage = (props) => {
  const { data } = props;
  const { t } = useTranslation();
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.page = 'footer-text-align-center';
    window.scrollTo(0, 0);
  }, [id]);

  const currentService = data.blocks.find((block) => (
    block.id === id
  ));

  const img = new Image();
  img.src = currentService.url;
  img.onload = () => setIsLoaded(true);

  return (
    <div className="service-details">
      <Helmet>
        <title>{`${currentService['title-article']}`}</title>
      </Helmet>
      <div className="content-wrapper content-wrapper-flex">
        <h2 className="service-details__title">
          {currentService.title}
        </h2>
        <div className="service-details__box-content">
          {
            isLoaded
              ? <img className="service-details__image" src={img.src} alt={currentService.title} />
              : (
                <div className="service-details__spinner-box">
                  <Spinner />
                </div>
              )
          }
          <h2 className="service-details__service-title">{currentService['title-article']}</h2>
          <p className="service-details__date">{currentService.date}</p>
          <p className="service-details__text">{currentService.text}</p>
          <div className="service-details__box-links">
            <Link to={routs.contactPath} className="service-details__contact-link service-details__contact-link-my-contacts">
              {t('myContacts')}
            </Link>
            <Link to={routs.servicesPath} className="service-details__contact-link service-details__contact-link-my-services">
              {t('otherServices')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
