import css from './TransactionHistory.module.css';
import propTypes from 'prop-types';
import Transaction from './Transaction';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr className={css.headings}>
          <th className={css.heading}>Type</th>
          <th className={css.heading}>Amount</th>
          <th className={css.heading}>Currency</th>
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
  items: propTypes.array,
};

export default TransactionHistory;
