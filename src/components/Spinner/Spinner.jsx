import './Spinner.scss';

const Spinner = ({ positionFixedCenter }) => (
  <div className={`lds-ellipsis ${positionFixedCenter ? 'fixed' : ''}`}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
