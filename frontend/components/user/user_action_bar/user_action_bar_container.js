import { connect } from 'react-redux';
import UserActionBar from './user_action_bar';
import { requestFriend, acceptRequest } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  requestFriend: (userId, friendId) => dispatch(requestFriend(userId, friendId)),
  acceptRequest: (userId, friendId) => dispatch(acceptRequest(userId, friendId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActionBar);
