import css from './Transaction.module.css';
import propTypes from 'prop-types';

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={css.trow}>
      <td className={css.tcell}>{type}</td>
      <td className={css.tcell}>{amount}</td>
      <td className={css.tcell}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string,
};

export default Transaction;
