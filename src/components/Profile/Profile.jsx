import PropTypes from 'prop-types';
import { Description } from './Description';
import { Stats } from './Stats';
import { Box } from './../Box';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <Box
        width="400px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginBottom="20px"
        bg="white"
        as="section"
      >
        <h2>My Profile</h2>
        <Description
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <Stats
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </Box>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
