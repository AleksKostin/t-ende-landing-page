import { useTranslation } from 'react-i18next';
import './ServiceItem.scss';
import { Link } from 'react-router-dom';
import routs from 'config/routeConfig/routeConfig';

const ServiceItem = (props) => {
  const { content } = props;
  const { t } = useTranslation();

  return (
    <Link to={`${routs.servicePath}${content.id}`} className="service-item">
      <div className="service-item__image">
        <img src={content.icon} alt={content.title} className="service-item__icon" />
      </div>
      <div className="service-item__content">
        <h2 className="service-item__title">
          {content.title}
        </h2>
        <p className="service-item__paragraph">
          {content.paragraph}
        </p>
        <p className="service-item__details">
          {t('details')}
        </p>
      </div>
    </Link>
  );
};

export default ServiceItem;
