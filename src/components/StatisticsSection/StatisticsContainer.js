import styles from './StatisticsContainer.module.css';
import { StatisticsElement } from './StatisticsElement';
import propTypes from 'prop-types';

export const StatisticsContainer = ({ title, data }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles['stat-list']}>
        {data.map(item => (
          <StatisticsElement
            key={item.id}
            label={item.label}
            num={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

StatisticsContainer.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
  title: propTypes.string,
};
