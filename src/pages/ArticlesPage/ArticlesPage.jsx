import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import './ArticlesPage.scss';
import { useTranslation } from 'react-i18next';
import SlidesList from 'components/SlidesList/SlidesList';
import Arrows from 'components/Arrows/Arrows';
import Dots from 'components/Dots/Dots';
import Slide from 'components/Slide/Slide';
import cn from 'classnames';

export const SliderContext = createContext();
const INITIAL_SLIDE = 0;
const INITIAL_NUMBER_SLIDES = 3;

const ArticlesPage = ({ data }) => {
  const { t } = useTranslation();
  const items = data.articles;
  const [prevSlide, setPrevSlide] = useState(items.length - 1);
  const [slide, setSlide] = useState(INITIAL_SLIDE);
  const [nextSlide, setNextSlide] = useState(slide + 1);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [itemsDisplayed, setItemsDisplayed] = useState(INITIAL_NUMBER_SLIDES);
  const [isLoadedNewSlide, setIsLoadedNewSlide] = useState(false);
  const newSlideRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1023px)');

    if (media.matches !== isMobile) {
      setIsMobile(media.matches);
    }

    const listener = () => setIsMobile(media.matches);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isMobile]);

  useEffect(() => {
    if (itemsDisplayed > INITIAL_NUMBER_SLIDES) {
      newSlideRef.current?.scrollIntoView();
    }
  }, [itemsDisplayed]);

  const changeSlide = useCallback((direction = 1) => {
    setAnimationDirection(null);
    setIsLoadedNewSlide(false);
    let currentSlideNumber = INITIAL_SLIDE;
    let prevSlideNumber;
    let nextSlideNumber;

    if (slide + direction < INITIAL_SLIDE) {
      currentSlideNumber = items.length - 1;
      prevSlideNumber = currentSlideNumber - 1;
      nextSlideNumber = (currentSlideNumber + 1) % items.length;
    } else {
      currentSlideNumber = (slide + direction) % items.length;
      prevSlideNumber = (
        currentSlideNumber === INITIAL_SLIDE
          ? items.length - 1
          : currentSlideNumber - 1
      );
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

  const dataSliderContext = useMemo(
    () => ({
      changeSlide,
      currentSlide: slide,
      prevSlide,
      nextSlide,
      items,
      animationDirection,
      isMobile,
      isLoadedNewSlide,
      setIsLoadedNewSlide,
    }),
    [
      changeSlide,
      animationDirection,
      items,
      nextSlide,
      prevSlide,
      slide,
      isMobile,
      isLoadedNewSlide,
    ],
  );

  const handleClick = () => {
    if (itemsDisplayed < items.length) {
      setItemsDisplayed((prev) => prev + 1);
    }
  };

  const slides = items.map((item, index) => {
    if (index < itemsDisplayed) {
      return (
        <Slide
          ref={index === itemsDisplayed - 1 ? newSlideRef : null}
          data={item}
          key={item.id}
        />
      );
    }
    return null;
  });

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
                  <Arrows>
                    <Dots />
                  </Arrows>
                </>
              ) : (
                <>
                  {slides}
                  {
                    itemsDisplayed !== items.length ? (
                      <button
                        className={cn('btn', { hidden: !items.length })}
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
