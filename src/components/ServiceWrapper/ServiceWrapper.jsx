import { useTranslation } from 'react-i18next';
import './ServiceWrapper.scss';
import { Link } from 'react-router-dom';

const ServiceWrapper = (props) => {
  const { content } = props;
  const { t } = useTranslation();

  return (
    <Link href className="service-wrapper" target="_blank">
      <div className="service-wrapper__image">
        <img src={content.icon} alt="" />
      </div>
      <div className="service-wrapper__content">
        <h1 className="service-wrapper__title">
          {content.title}
        </h1>
        <p className="service-wrapper__paragraph">
          {content.paragraph}
        </p>
        <p className="service-wrapper__details">
          {t('details')}
        </p>
      </div>
    </Link>
  );
};

export default ServiceWrapper;
