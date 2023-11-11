/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Dots.scss';
import { useContext } from 'react';
import { SliderContext } from 'pages/ArticlesPage/ArticlesPage';

const Dots = () => {
  // const { data } = props;
  const {
    items,
    goToSlide,
    currentSlide,
  } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];

    for (let i = 0; i < items.length; i += 1) {
      dots.push(
        <div
          key={`dot-${i}`}
          className={`dot ${i === currentSlide ? 'selected' : ''}`}
          onClick={() => goToSlide(i)}
        />,
      );
    }

    return dots;
  };

  return (
    <div className="dots">{renderDots()}</div>
  );
};

export default Dots;
