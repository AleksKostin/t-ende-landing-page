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

  const indexChainSlides = prevItem || prevItem === 0
    ? [prevItem, currentItem, nextItem]
    : [currentItem, nextItem];

  const slides = indexChainSlides.map((indexSlide) => {
    const indexChainLinkSlides = items.findIndex((_, index) => index === indexSlide);

    if (indexChainLinkSlides >= 0) {
      return (
        <Slide
          data={items[indexChainLinkSlides]}
          key={items[indexChainLinkSlides].id}
          image={images[indexChainLinkSlides]}
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
