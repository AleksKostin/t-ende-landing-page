import './Arrows.scss';
import { useContext } from 'react';
import { SliderContext } from 'pages/ArticlesPage/ArticlesPage';

const Arrows = ({ children }) => {
  const {
    items,
    changeSlide,
  } = useContext(SliderContext);

  return (
    items.length ? (
      <div
        className="arrows"
      >
        <button aria-label="slide left" className="arrows__left" type="button" onClick={() => changeSlide(-1)} />
        {children}
        <button aria-label="slide right" className="arrows__right" type="button" onClick={() => changeSlide(1)} />
      </div>
    ) : null
  );
};

export default Arrows;
