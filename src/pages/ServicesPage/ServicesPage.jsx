import './ServicesPage.scss';
import { useTranslation } from 'react-i18next';
import ServiceWrapper from 'components/ServiceWrapper/ServiceWrapper';

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
            <div className="services__content-block" key={block.id}>
              <ServiceWrapper
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
