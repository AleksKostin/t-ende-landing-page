import './ServicesPage.scss';
import { useTranslation } from 'react-i18next';
import ServiceItem from 'components/ServiceItem/ServiceItem';

const ServicesPage = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div className="services">
      <div className="content-wrapper">
        <h2 id="services-page" className="services__title">
          {t('howCanIHelpYou')}
        </h2>
        <div className="services__content">
          {data?.blocks.map((block) => (
            <div key={block.id}>
              <ServiceItem
                content={block}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
