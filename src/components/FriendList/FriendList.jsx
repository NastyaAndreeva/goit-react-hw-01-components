import PropTypes from 'prop-types';
import { FriendListUI } from '../../ui/FriendList';
import { FriendListItem } from './FriendListItem';
import { Box } from '../Box';

export const FriendList = ({ friends }) => {
  return (
    <Box
      width="400px"
      margin="0 auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ backgroundColor: 'white' }}
      marginBottom="20px"
      as="section"
    >
      <h2>My Friend List</h2>
      <FriendListUI className="friend-list">
        {friends.map(friend => {
          return (
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            ></FriendListItem>
          );
        })}
      </FriendListUI>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
