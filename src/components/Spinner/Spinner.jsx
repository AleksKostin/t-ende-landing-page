import './Spinner.scss';

const Spinner = ({ cls }) => (
  <div className={`lds-ellipsis ${cls ? 'fixed' : ''}`}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
