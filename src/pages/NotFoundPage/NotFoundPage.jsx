import './NotFoundPage.scss';
import { Link, useLocation } from 'react-router-dom';
import routs from 'config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ footerHeight }) => {
  const { t } = useTranslation();
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const originalUrl = location.state?.originalUrl;

  useEffect(() => {
    if (originalUrl) {
      window.history.replaceState({}, '', originalUrl);
    }
  }, [originalUrl]);

  useEffect(() => {
    setHeight(footerHeight);
  }, [footerHeight]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 850px)');

    if (media.matches !== isMobile) {
      setIsMobile(media.matches);
    }

    const listener = () => setIsMobile(media.matches);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isMobile]);

  const heightNotFoundPage = `calc(
    100vh - ${isMobile ? 'var(--navbar-height-mobile)' : 'var(--navbar-height)'} - ${height}px
  )`;

  return (
    <div
      className="not-found"
      style={{
        height: heightNotFoundPage,
      }}
    >
      <Helmet>
        <title>{t('errorNotFound')}</title>
      </Helmet>
      <div className="content-wrapper">
        <div className="not-found__box">
          <h1 className="not-found__404">{t('errorNotFound')}</h1>
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
