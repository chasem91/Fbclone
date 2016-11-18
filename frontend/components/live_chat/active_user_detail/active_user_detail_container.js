import { connect } from 'react-redux';
import ActiveUserDetail from './active_user_detail';
import { receiveChatBox } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  receiveChatBox: userId => dispatch(receiveChatBox(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveUserDetail);
