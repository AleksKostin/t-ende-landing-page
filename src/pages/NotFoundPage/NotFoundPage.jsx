import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
import routs from 'config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { rootElement } from 'index';

const NotFoundPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.dataset.page = 'footer-text-align-center';

    if (rootElement) {
      rootElement.classList.add('root-not-found');
    }

    return () => {
      if (rootElement) {
        rootElement.classList.remove('root-not-found');
      }
    };
  }, []);

  return (
    <div
      className="not-found"
    >
      <Helmet>
        <title>{t('errorNotFound')}</title>
      </Helmet>
      <div className="content-wrapper">
        <div className="not-found__box">
          <h1 className="not-found__title">{t('errorNotFound')}</h1>
          <p className="not-found__message">{t('messageNotFound')}</p>
          <Link to={routs.mainPath} className="not-found__link-main">
            {t('linkToMain')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
