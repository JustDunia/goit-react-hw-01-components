import css from './Stats.module.css';
import propTypes from 'prop-types';

const Stats = ({ stats }) => (
  <ul className={css.stats}>
    <li className={css.stat}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.stat}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.stat}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
);

Stats.propTypes = {
  stats: propTypes.object,
};

export default Stats;
