import './Dots.scss';
import { useContext } from 'react';
import { SliderContext } from 'pages/ArticlesPage/ArticlesPage';
import cn from 'classnames';

const Dots = () => {
  const {
    items,
    currentSlide,
  } = useContext(SliderContext);

  const dotsItems = [...items].map((item, i) => (
    <div
      key={item.id}
      className={cn('dot', { selected: i === currentSlide })}
    />
  ));

  return (
    items ? (
      <div className="dots">{dotsItems}</div>
    ) : null
  );
};

export default Dots;
