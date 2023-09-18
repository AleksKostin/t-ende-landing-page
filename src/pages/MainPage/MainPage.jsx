import { useEffect, useState } from 'react';
import classNames from 'classnames';
import './MainPage.scss';
import { useTranslation } from 'react-i18next';
import arrow from 'assets/icons/arrow.svg';

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
      className={classNames('main-intro', { 'main-intro__loaded': isLoaded })}
    >
      <div className="content-wrapper">
        <div
          className={classNames('main-content', {
            'main-loaded-content': isLoaded,
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
            {data.contacts.map((contact) => (
              <a
                href={contact.link}
                className="main-contacts__link"
              >
                <img
                  src={contact.icon}
                  // eslint-disable-next-line no-useless-escape
                  alt={contact.icon.match(/[^\/]+(?=\.\w+$)/)[0]}
                  key={contact.icon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#services-page"
        className={classNames('main-arrow', {
          'main-arrow__loaded': isLoaded,
        })}
      >
        <img
          src={arrow}
          alt="scroll to services"
          aria-hidden="true"
          className="main-arrow__hover"
        />
      </a>
    </div>
  );
};

export default MainPage;
