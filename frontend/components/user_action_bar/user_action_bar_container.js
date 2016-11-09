import { connect } from 'react-redux';
import { requestFriend, receiveRequestedFriends, receiveFriendRequests } from '../../actions/user_actions';
import UserActionBar from './user_action_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user.profile,
  requestedFriends: state.user.requestedFriends,
  friendRequests: state.user.friendRequests
});

const mapDispatchToProps = dispatch => ({
  requestFriend: (user_id, friend_id) => dispatch(requestFriend(user_id, friend_id)),
  receiveRequestedFriends: (requests) => dispatch(receiveRequestedFriends(requests)),
  receiveFriendRequests: (requests) => dispatch(receiveFriendRequests(requests))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActionBar);


// receiveFriends: (friends) => dispatch(receiveFriends(friends))
