import styles from './TransactionHistory.module.css';
import propTypes from 'prop-types';
import { Transaction } from './Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles['transaction-history']}>
      <thead>
        <tr className={styles.headings}>
          <th className={styles.heading}>Type</th>
          <th className={styles.heading}>Amount</th>
          <th className={styles.heading}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(i => (
          <Transaction
            key={i.id}
            type={i.type}
            amount={i.amount}
            currency={i.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};
