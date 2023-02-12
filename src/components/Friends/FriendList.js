import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendBox, FriendCard } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendBox>
      {friends.map(friend => (
        <FriendCard key={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </FriendCard>
      ))}
    </FriendBox>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired
    }),
  ).isRequired,
};
  