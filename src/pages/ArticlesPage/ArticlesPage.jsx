/* eslint-disable i18next/no-literal-string */
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import './ArticlesPage.scss';
import { useTranslation } from 'react-i18next';
import SlidesList from 'components/SlidesList/SlidesList';
import Arrows from 'components/Arrows/Arrows';
import Dots from 'components/Dots/Dots';
import Slide from 'components/Slide/Slide';

export const SliderContext = createContext();

const ArticlesPage = ({ data }) => {
  const { t } = useTranslation();
  const items = data.articles;
  const [prevSlide, setPrevSlide] = useState(items.length - 1);
  const [slide, setSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(slide + 1);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [itemsDisplayed, setItemsDisplayed] = useState(3);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1024px)');

    if (media.matches !== isMobile) {
      setIsMobile(media.matches);
    }

    const listener = () => setIsMobile(media.matches);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isMobile]);

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

  const dataSliderContext = useMemo(() => ({
    changeSlide,
    currentSlide: slide,
    prevSlide,
    nextSlide,
    items,
    animationDirection,
  }), [changeSlide, animationDirection, items, nextSlide, prevSlide, slide]);

  const handleClick = () => {
    if (itemsDisplayed < items.length) {
      setItemsDisplayed((prev) => prev + 1);
    }
  };

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
              !isMobile ? (
                <>
                  <SlidesList />
                  <Arrows />
                  <Dots />
                </>
              ) : (
                <>
                  {items.map((item, index) => {
                    if (index < itemsDisplayed) {
                      return (
                        <Slide data={item} key={item.id} />
                      );
                    }
                    return null;
                  })}
                  {
                  itemsDisplayed !== items.length ? (
                    <button
                      className="btn"
                      type="button"
                      onClick={() => handleClick()}
                    >
                      {t('showMore')}
                    </button>
                  )
                    : null
                }
                </>
              )
            }
          </SliderContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
