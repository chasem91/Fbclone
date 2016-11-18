import { connect } from 'react-redux';
import ActiveUserDetail from './active_user_detail';
import { receiveChatBox, receiveMessage } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  receiveChatBox: userId => dispatch(receiveChatBox(userId)),
  receiveMessage: message => dispatch(receiveMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveUserDetail);
