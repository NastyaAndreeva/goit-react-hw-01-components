import PropTypes from 'prop-types';
import { DescriptionUI, ProfileAvatar, ProfileName } from '../ProfileStyled';

export const Description = ({ avatar, username, tag, location }) => {
  return (
    <DescriptionUI className="description">
      <ProfileAvatar src={avatar} alt="User avatar" className="avatar" />
      <ProfileName className="name">{username}</ProfileName>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </DescriptionUI>
  );
};

Description.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
