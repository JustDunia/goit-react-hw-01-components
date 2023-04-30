import css from './FriendList.module.css';
import Friend from './Friend';
import propTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
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
  friends: propTypes.array,
};

export default FriendList;
