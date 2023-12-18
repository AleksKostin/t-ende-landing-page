import Spinner from 'components/Spinner/Spinner';
import './Slide.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import cn from 'classnames';

const Slide = React.forwardRef((props, ref) => {
  const { t } = useTranslation();
  const {
    data,
    isMobile,
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const img = new Image();
  img.src = data.url;

  useEffect(() => {
    setIsLoaded(false);
    img.onload = () => setIsLoaded(true);
  }, [data]);

  return (
    data ? (
      <Link ref={ref} to={`/landing/article/${data.id}`} className="slide">
        {
          isLoaded
            ? <img className="slide__image" src={img.src} alt={data.title} />
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
