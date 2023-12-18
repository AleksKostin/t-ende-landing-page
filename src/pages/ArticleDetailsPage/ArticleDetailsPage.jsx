import { useEffect, useRef, useState } from 'react';
import './ArticleDetailsPage.scss';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import { scroller } from 'react-scroll';
import cn from 'classnames';
import SlidesList from 'components/SlidesList/SlidesList';
import Arrows from 'components/Arrows/Arrows';
import Dots from 'components/Dots/Dots';
import changeSlide from 'lib/changeSlide/changeSlide';
import Slide from 'components/Slide/Slide';

const INITIAL_SLIDE = 0;
const INITIAL_NUMBER_SLIDES = 2;

const ArticleDetailsPage = (props) => {
  const { data } = props;
  const { t } = useTranslation();
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const items = data.articles;
  const [slide, setSlide] = useState(INITIAL_SLIDE);
  const [nextSlide, setNextSlide] = useState(slide + 1);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [itemsDisplayed, setItemsDisplayed] = useState(INITIAL_NUMBER_SLIDES);
  const newSlideRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.page = 'article';
    scroller.scrollTo('header', {
      spy: true,
      smooth: false,
      duration: 100,
    });
  }, [id]);

  useEffect(() => {
    if (itemsDisplayed > INITIAL_NUMBER_SLIDES) {
      newSlideRef.current?.scrollIntoView();
    }
  }, [itemsDisplayed]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1023px)');

    if (media.matches !== isMobile) {
      setIsMobile(media.matches);
    }

    const listener = () => setIsMobile(media.matches);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isMobile]);

  const currentArticle = items.find((item) => (
    item.id === id
  ));

  if (!currentArticle) {
    return <div>{t('articleNotFound')}</div>;
  }

  const img = new Image();
  img.src = currentArticle.url;
  img.onload = () => setIsLoaded(true);

  const filteredItems = items.filter((item) => item.id !== id);

  const handleChangeSlide = (direction) => {
    setAnimationDirection(null);

    const {
      currentSlideNumber,
      nextSlideNumber,
    } = changeSlide(direction, slide, filteredItems);

    setSlide(currentSlideNumber);
    setNextSlide(nextSlideNumber);

    const timeout = setTimeout(() => {
      setAnimationDirection(() => direction);
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  };

  const handleClick = () => {
    if (itemsDisplayed < filteredItems.length) {
      setItemsDisplayed((prev) => prev + 1);
    }
  };

  const slides = filteredItems.map((item, index) => {
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
    <div className="article-details">
      <div className="content-wrapper content-wrapper-flex">
        <h2 className="article-details__title">
          {t('interestingTurkey')}
        </h2>
        <div className="article-details__box-content">
          {
            isLoaded
              ? <img className="article-details__image" src={img.src} alt={currentArticle.title} />
              : (
                <div className="article-details__error_box">
                  <Spinner />
                </div>
              )
          }
          <h2 className="article-details__article-title">{currentArticle.title}</h2>
          <p className="article-details__date">{currentArticle.date}</p>
          <p className="article-details__text">{currentArticle.text}</p>
          <div className="article-details__box-links">
            <a href="/landing/#contact-page" className="article-details__contact-link article-details__contact-link-my-contacts">
              {t('myContacts')}
            </a>
            <a href="/landing/#services-page" className="article-details__contact-link article-details__contact-link-my-services">
              {t('myServices')}
            </a>
          </div>
        </div>
      </div>
      <div className="slider-details">
        <div className="content-wrapper content-wrapper-flex">
          {
            !isMobile ? (
              <>
                <SlidesList
                  currentItem={slide}
                  nextItem={nextSlide}
                  items={filteredItems}
                  animationDirection={animationDirection}
                />
                <Arrows
                  items={filteredItems}
                  onChangeItem={handleChangeSlide}
                >
                  <Dots
                    items={filteredItems}
                    activeItem={slide}
                  />
                </Arrows>
              </>
            ) : (
              <>
                {slides}
                {
                  itemsDisplayed !== filteredItems.length ? (
                    <button
                      className={cn('article-details__btn', { hidden: !filteredItems.length })}
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

export default ArticleDetailsPage;
