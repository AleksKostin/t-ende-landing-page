/* eslint-disable jsx-a11y/anchor-is-valid */
import Spinner from 'components/Spinner/Spinner';
import './Slide.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import cn from 'classnames';
import { SliderContext } from 'pages/ArticlesPage/ArticlesPage';

const Slide = (props) => {
  const { data } = props;
  const { t } = useTranslation();
  const {
    isMobile,
  } = useContext(SliderContext);

  return (
    data ? (
      <Link href className="slide" target="_blank">
        <img className="slide__image" src={data.url} alt={data.title} />
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
};

export default Slide;
