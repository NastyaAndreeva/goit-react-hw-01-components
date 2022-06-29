import PropTypes from 'prop-types';
import {
  FriendListItemUI,
  StatusCheckbox,
  FriendAvatar,
} from '../../ui/FriendList';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemUI clasName="item">
      <StatusCheckbox className="status" isOnline={isOnline}></StatusCheckbox>
      <FriendAvatar
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </FriendListItemUI>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
