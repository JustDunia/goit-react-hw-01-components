import styles from './Transaction.module.css';
import propTypes from 'prop-types';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={styles.trow}>
      <td className={styles.tcell}>{type}</td>
      <td className={styles.tcell}>{amount}</td>
      <td className={styles.tcell}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};
