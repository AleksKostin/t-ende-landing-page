import './Arrows.scss';
import { useContext } from 'react';
import { SliderContext } from 'pages/ArticlesPage/ArticlesPage';

const Arrows = () => {
  const {
    changeSlide,
    items,
  } = useContext(SliderContext);

  return (
    <div
      className="arrows"
      style={{ gap: `calc((${items.length} * 50px) + 40px)` }}
    >
      <button aria-label="slide left" className="arrows__left" type="button" onClick={() => changeSlide(-1)} />
      <button aria-label="slide right" className="arrows__right" type="button" onClick={() => changeSlide(1)} />
    </div>
  );
};

export default Arrows;
