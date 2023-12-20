import './SlidesList.scss';
import Slide from 'components/Slide/Slide';
import cn from 'classnames';
import { useEffect, useState } from 'react';

const SlidesList = (props) => {
  const {
    currentItem,
    prevItem,
    nextItem,
    items,
    animationDirection,
  } = props;

  const [images, setImages] = useState([]);

  useEffect(() => {
    const preloadImages = items.map((item) => {
      const img = new Image();
      img.src = item.url;
      return img;
    });
    setImages(preloadImages);
  }, [items]);

  let animation = '';

  if (animationDirection < 0) {
    animation = 'animation-left';
  } else if (animationDirection > 0) {
    animation = 'animation-right';
  }

  const numbItems = prevItem || prevItem === 0
    ? [prevItem, currentItem, nextItem]
    : [currentItem, nextItem];

  const slides = numbItems.map((num) => {
    const chainLinkSlide = items.findIndex((_, index) => index === num);
    if (chainLinkSlide >= 0) {
      return (
        <Slide
          data={items[chainLinkSlide]}
          key={items[chainLinkSlide].id}
          image={images[chainLinkSlide]}
        />
      );
    }
    return null;
  });

  return (
    <div className={cn('slide-list', animation)}>
      {slides}
    </div>
  );
};

export default SlidesList;
