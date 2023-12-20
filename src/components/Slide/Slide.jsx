/* eslint-disable no-extra-boolean-cast */
import Spinner from 'components/Spinner/Spinner';
import './Slide.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import React from 'react';
import cn from 'classnames';
import routs from 'config/routeConfig/routeConfig';

const Slide = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const {
    data,
    isMobile,
    image,
  } = props;

  const src = image ? image.src : data.url;

  return (
    data ? (
      <Link ref={ref} to={`${routs.articlePath}${data.id}`} className="slide">
        {
          image
            ? <img className="slide__image" src={src} alt={data.title} />
            : (
              <div className="error slide__image">
                <Spinner />
              </div>
            )
        }
        <h2 className="slide__title">{data.title}</h2>
        <p className="slide__date">{data.date}</p>
        <p className="slide__text">{data.paragraph}</p>
        <p className="slide__details">{t('details')}</p>
      </Link>
    ) : (
      <div className={cn('error error_box', { slide: !isMobile })}>
        <Spinner />
      </div>
    )
  );
});

export default Slide;
