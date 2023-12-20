import {
  useEffect,
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
import { Element } from 'react-scroll';
import changeSlide from 'lib/changeSlide/changeSlide';

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

  const handleChangeSlide = (direction) => {
    setAnimationDirection(null);

    const {
      currentSlideNumber,
      prevSlideNumber,
      nextSlideNumber,
    } = changeSlide(direction, slide, items);

    setSlide(currentSlideNumber);
    setPrevSlide(prevSlideNumber);
    setNextSlide(nextSlideNumber);

    const timeout = setTimeout(() => {
      setAnimationDirection(() => direction);
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  };

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
          isMobile={isMobile}
          key={item.id}
        />
      );
    }
    return null;
  });

  return (
    <div className="articles">
      <div className="content-wrapper">
        <Element name="#articles-page">
          <h2 id="articles-page" className="articles__title">
            {t('interestingTurkey')}
          </h2>
        </Element>
        <div className="articles__slider">
          {
            !isMobile ? (
              <>
                <SlidesList
                  currentItem={slide}
                  prevItem={prevSlide}
                  nextItem={nextSlide}
                  items={items}
                  animationDirection={animationDirection}
                />
                <Arrows
                  items={items}
                  onChangeItem={handleChangeSlide}
                >
                  <Dots
                    items={items}
                    activeItem={slide}
                  />
                </Arrows>
              </>
            ) : (
              <>
                {slides}
                {
                  itemsDisplayed !== items.length ? (
                    <button
                      className={cn('articles__btn', { hidden: !items.length })}
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
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
