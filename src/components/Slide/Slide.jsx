import './Slide.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Slide = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <Link href className="slide" target="_blank">
      <img className="slide__image" src={data.url} alt={data.title} />
      <h2 className="slide__title">{data.title}</h2>
      <p className="slide__date">{data.date}</p>
      <p className="slide__text">{data.paragraph}</p>
      <p className="slide__details">{t('details')}</p>
    </Link>
  );
};

export default Slide;
