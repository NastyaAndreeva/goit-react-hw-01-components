import PropTypes from 'prop-types';
import { Description } from './Description';
import { Stats } from './Stats';
import { Box } from './../Box';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <Box
        width="400px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginBottom="20px"
        style={{ backgroundColor: 'white' }}
        as="section"
      >
        <h2>My Profile</h2>
        <Description
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        ></Description>
        <Stats
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        ></Stats>
      </Box>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
