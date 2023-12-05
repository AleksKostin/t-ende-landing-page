/* eslint-disable jsx-a11y/anchor-is-valid */
import Spinner from 'components/Spinner/Spinner';
import './Slide.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import cn from 'classnames';
import { SliderContext } from 'pages/ArticlesPage/ArticlesPage';

const Slide = React.forwardRef((props, ref) => {
  const { data } = props;
  const { t } = useTranslation();
  const {
    isMobile,
    isLoadedSlide,
    setIsLoadedSlide,
  } = useContext(SliderContext);

  const [isLoaded, setIsLoaded] = useState(false);

  const img = new Image();
  img.src = data.url;
  img.onload = () => {
    setIsLoaded(() => true);
    setIsLoadedSlide(() => true);
  };

  return (
    data ? (
      <Link ref={ref} href className="slide" target="_blank">
        {
          isLoaded && isLoadedSlide
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
