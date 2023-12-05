import './SlidesList.scss';
import Slide from 'components/Slide/Slide';
import { useContext } from 'react';
import { SliderContext } from 'pages/ArticlesPage/ArticlesPage';
import cn from 'classnames';

const SlidesList = () => {
  const {
    currentSlide,
    prevSlide,
    nextSlide,
    items,
    animationDirection,
  } = useContext(SliderContext);

  let animation = '';

  if (animationDirection < 0) {
    animation = 'animation-left';
  } else if (animationDirection > 0) {
    animation = 'animation-right';
  }

  return (
    <div className={cn('slide-list', animation)}>
      <Slide data={items[prevSlide]} />
      <Slide data={items[currentSlide]} />
      <Slide data={items[nextSlide]} />
    </div>
  );
};

export default SlidesList;
