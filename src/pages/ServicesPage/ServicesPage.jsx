import './ServicesPage.scss';
import { useTranslation } from 'react-i18next';
import ServiceWrapper from 'components/ServiceWrapper/ServiceWrapper';

const ServicesPage = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div className="services-page">
      <div className="content-wrapper">
        <h1 id="services-page" className="services-page__title">
          {t('howCanIHelpYou')}
        </h1>
        <div className="services-page__content">
          {data?.blocks.map((block) => (
            <div className="services-page__content__block">
              <ServiceWrapper
                content={block}
                key={block.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
