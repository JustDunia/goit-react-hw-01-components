import css from './Statistics.module.css';
import Stat from './Stat';
import propTypes from 'prop-types';

const Statistics = ({ title, data }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css['stat-list']}>
        {data.map(item => (
          <Stat key={item.id} label={item.label} num={item.percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: propTypes.array.isRequired,
  title: propTypes.string,
};

export default Statistics;
