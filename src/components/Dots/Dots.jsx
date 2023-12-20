import './Dots.scss';
import cn from 'classnames';

const Dots = (props) => {
  const {
    items,
    activeItem,
  } = props;

  const dotsItems = [...items].map((item, i) => (
    <div
      key={item.id}
      className={cn('dot', { selected: i === activeItem })}
    />
  ));

  return (
    items ? (
      <div className="dots">{dotsItems}</div>
    ) : null
  );
};

export default Dots;
