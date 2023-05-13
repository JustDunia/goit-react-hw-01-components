import styles from './StatisticsElement.module.css';
import propTypes from 'prop-types';

export const StatisticsElement = ({ label, num }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{num}%</span>
    </li>
  );
};

StatisticsElement.propTypes = {
  label: propTypes.string.isRequired,
  num: propTypes.number.isRequired,
};
