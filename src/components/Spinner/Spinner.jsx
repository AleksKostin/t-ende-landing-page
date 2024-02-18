import cn from 'classnames';
import './Spinner.scss';

const Spinner = ({ positionFixedCenter, positionCenter }) => (
  <div className={cn('lds-ellipsis', { fixed: positionFixedCenter, center: positionCenter })}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
