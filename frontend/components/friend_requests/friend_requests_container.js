import { connect } from 'react-redux';
import FriendRequests from './friend_requests';
import { getFriendRequests } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  friendRequests: state.user.friendRequests
});

const mapDispatchToProps = dispatch => ({
  getFriendRequests: user_id => dispatch(getFriendRequests(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequests);
