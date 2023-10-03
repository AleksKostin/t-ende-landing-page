import { useEffect, useState } from 'react';
import classNames from 'classnames';
import './MainPage.scss';
import { useTranslation } from 'react-i18next';
import arrow from 'assets/icons/arrow.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import { ReactComponent as WhatsApp } from 'assets/icons/whatsApp.svg';
import { ReactComponent as Telegram } from 'assets/icons/telegram.svg';

const ANIMATION_SCALED_DELAY = 200;
const ANIMATION_SLIDER_DELAY = 7000;
const ANIMATION_START_SLIDER_DELAY = 500;

const MainPage = (props) => {
  const { data } = props;
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isStartedSlider, setIsStartedSlider] = useState(false);
  let animationTurk;
  let animationRus;

  useEffect(() => {
    const timerScale = setTimeout(
      () => setIsLoaded(() => true),
      ANIMATION_SCALED_DELAY,
    );
    const intervalSlider = setInterval(
      () => setIsVisible((prev) => !prev),
      ANIMATION_SLIDER_DELAY,
    );
    const timerStartSlider = setTimeout(
      () => setIsStartedSlider(() => true),
      ANIMATION_START_SLIDER_DELAY,
    );
    return () => {
      clearTimeout(timerScale);
      clearInterval(intervalSlider);
      clearTimeout(timerStartSlider);
    };
  }, []);

  if (isStartedSlider) {
    animationTurk = {
      'main-content__hidden-title-turk': isVisible,
      'main-content__visibility-title-turk': !isVisible,
    };
    animationRus = {
      'main-content__hidden-title-rus': !isVisible,
      'main-content__visibility-title-rus': isVisible,
    };
  }

  return (
    <div
      id="main-page"
      className={classNames('main-intro', { 'main-intro_loaded': isLoaded })}
    >
      <div className="content-wrapper">
        <div
          className={classNames('main-content', {
            'main-content_loaded': isLoaded,
          })}
        >
          <h1 className={classNames('main-content__title', animationTurk)}>
            {t('greetingTurk')}
          </h1>
          <h2 className={classNames('main-content__subtitle', animationTurk)}>
            {t('greetingRus')}
          </h2>
          <h1 className={classNames('main-content__title-rus', animationRus)}>
            {t('greetingRusSpaces')}
          </h1>
          <p className="main-content__text">
            {data && data.paragraph}
          </p>
          <div className="main-contacts">
            <a
              href="#1"
              className="main-contacts__link"
            >
              <Instagram />
            </a>
            <a
              href="#1"
              className="main-contacts__link"
            >
              <WhatsApp />
            </a>
            <a
              href="#1"
              className="main-contacts__link"
            >
              <Telegram />
            </a>
          </div>
        </div>
      </div>
      <a
        href="#services-page"
        className={classNames('main-arrow', {
          'main-arrow_loaded': isLoaded,
        })}
      >
        <img
          src={arrow}
          alt="scroll to services"
          aria-hidden="true"
          className="main-arrow__image"
        />
      </a>
    </div>
  );
};

export default MainPage;
