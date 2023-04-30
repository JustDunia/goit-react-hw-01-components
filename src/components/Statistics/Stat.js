import css from './Stat.module.css';
import propTypes from 'prop-types';

const Stat = ({ label, num }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{num}%</span>
    </li>
  );
};

Stat.propTypes = {
  label: propTypes.string.isRequired,
  num: propTypes.number.isRequired,
};

export default Stat;
