import { useEffect, useState } from 'react';
import classNames from 'classnames';
import './MainPage.scss';
import { useTranslation } from 'react-i18next';
import arrow from '../../assets/icons/arrow.svg';

const MainPage = (props) => {
  const { data } = props;
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(() => true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="main-page">
      <div className={classNames('main-intro', { 'main-loaded-intro': isLoaded })}>
        <div className="container">
          <div
            className={
              classNames(
                'main-content',
                { 'main-loaded-content': isLoaded },
              )
            }
          >
            <h1>
              {t('greetingTurk')}
            </h1>
            <h2>
              {t('greetingRus')}
            </h2>
            <p>
              {data ? data.paragraph : 'Loading...'}
            </p>
          </div>
          <img
            src={arrow}
            alt="scroll to services"
            className={classNames('main-arrow', { 'main-loaded-arrow': isLoaded })}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
