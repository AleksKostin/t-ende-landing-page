import { useTranslation } from 'react-i18next';
import './ServiceWrapper.scss';
import { Link } from 'react-router-dom';

const ServiceWrapper = (props) => {
  const { content } = props;
  const { t } = useTranslation();

  return (
    <Link href className="service-item" target="_blank">
      <div className="service-item__image">
        <img src={content.icon} alt="" />
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

export default ServiceWrapper;
