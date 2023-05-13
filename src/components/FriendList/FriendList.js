import styles from './FriendList.module.css';
import { Friend } from './Friend';
import propTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(f => (
        <Friend
          key={f.id}
          avatar={f.avatar}
          name={f.name}
          isOnline={f.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ),
};
