import './Arrows.scss';

const Arrows = (props) => {
  const {
    items,
    onChangeItem,
    children,
  } = props;

  return (
    items.length ? (
      <div
        className="arrows"
      >
        <button aria-label="slide left" className="arrows__left" type="button" onClick={() => onChangeItem(-1)} />
        {children}
        <button aria-label="slide right" className="arrows__right" type="button" onClick={() => onChangeItem(1)} />
      </div>
    ) : null
  );
};

export default Arrows;
