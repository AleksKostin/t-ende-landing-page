import './ServicesPage.scss';
import { useTranslation } from 'react-i18next';
import ServiceItem from 'components/ServiceItem/ServiceItem';
import { Element } from 'react-scroll';

const ServicesPage = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div className="services">
      <div className="content-wrapper">
        <Element name="#services-page">
          <h2 id="services-page" className="services__title">
            {t('howCanIHelpYou')}
          </h2>
        </Element>
        <div className="services__content">
          {data?.blocks.map((block) => (
            <ServiceItem
              content={block}
              key={block.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
