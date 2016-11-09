import { connect } from 'react-redux';
import FriendRequests from './friend_requests';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequests);
