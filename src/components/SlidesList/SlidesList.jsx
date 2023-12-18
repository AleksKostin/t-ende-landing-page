import './SlidesList.scss';
import Slide from 'components/Slide/Slide';
import cn from 'classnames';
import { useEffect } from 'react';

const SlidesList = (props) => {
  const {
    currentItem,
    prevItem,
    nextItem,
    items,
    animationDirection,
  } = props;

  let animation = '';

  useEffect(() => {
    console.log(prevItem);
  }, [prevItem]);

  if (animationDirection < 0) {
    animation = 'animation-left';
  } else if (animationDirection > 0) {
    animation = 'animation-right';
  }

  return (
    <div className={cn('slide-list', animation)}>
      {
        prevItem || prevItem === 0 ? (
          <Slide data={items[prevItem]} />
        ) : null
      }
      <Slide data={items[currentItem]} />
      <Slide data={items[nextItem]} />
    </div>
  );
};

export default SlidesList;
