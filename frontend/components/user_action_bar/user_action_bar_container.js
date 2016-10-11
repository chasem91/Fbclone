import { connect } from 'react-redux';
import { requestFriend } from '../../actions/user_actions';
import UserActionBar from './user_action_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user.user,
  requestedFriends: state.user.requestedFriends
});

const mapDispatchToProps = dispatch => ({
  requestFriend: (user_id, friend_id) => dispatch(requestFriend(user_id, friend_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActionBar);
