/* eslint-disable i18next/no-literal-string */
import {
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import './ArticlesPage.scss';
import { useTranslation } from 'react-i18next';
import SlidesList from 'components/SlidesList/SlidesList';
import Arrows from 'components/Arrows/Arrows';
import Dots from 'components/Dots/Dots';

export const SliderContext = createContext();

const ArticlesPage = ({ data }) => {
  const { t } = useTranslation();
  const items = data.articles;
  const [prevSlide, setPrevSlide] = useState(items.length - 1);
  const [slide, setSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(slide + 1);
  const [animationDirection, setAnimationDirection] = useState(null);

  const changeSlide = useCallback((direction = 1) => {
    setAnimationDirection(() => null);
    let currentSlideNumber = 0;
    let prevSlideNumber;
    let nextSlideNumber;

    if (slide + direction < 0) {
      currentSlideNumber = items.length - 1;
      prevSlideNumber = currentSlideNumber - 1;
      nextSlideNumber = (currentSlideNumber + 1) % items.length;
    } else {
      currentSlideNumber = (slide + direction) % items.length;
      prevSlideNumber = currentSlideNumber === 0 ? items.length - 1 : currentSlideNumber - 1;
      nextSlideNumber = (currentSlideNumber + 1) % items.length;
    }

    // eslint-disable-next-line max-len
    // console.table(`p2: ${prevSlideNumber}`, `c2: ${currentSlideNumber}`, `n2: ${nextSlideNumber}`);

    setSlide(currentSlideNumber);
    setPrevSlide(prevSlideNumber);
    setNextSlide(nextSlideNumber);

    const timeout = setTimeout(() => {
      setAnimationDirection(() => direction);
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  }, [slide, items.length]);

  const goToSlide = (number) => {
    if (number > slide) {
      setSlide(number);
      changeSlide(slide);
    } else {
      setSlide(number);
      changeSlide(-1);
    }
  };

  const dataSliderContext = useMemo(() => ({
    changeSlide,
    currentSlide: slide,
    prevSlide,
    nextSlide,
    items,
    animationDirection,
    goToSlide,
  }), [changeSlide, animationDirection, items, nextSlide, prevSlide, slide]);

  return (
    <div className="articles">
      <div className="content-wrapper">
        <h2 id="articles-page" className="articles__title">
          {t('interestingTurkey')}
        </h2>
        <div className="articles__slider">
          <SliderContext.Provider
            value={dataSliderContext}
          >
            {
            items.length ? (
              <SlidesList />
            ) : 'Loading...'
            }
            <Arrows />
            <Dots />
          </SliderContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
