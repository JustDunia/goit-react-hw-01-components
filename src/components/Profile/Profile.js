import css from './Profile.module.css';
import propTypes from 'prop-types';
import Stats from './Stats';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <Stats stats={stats} />
  </div>
);

Profile.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.object,
};

export default Profile;
