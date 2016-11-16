import { connect } from 'react-redux';
import LiveChatBox from './live_chat_box';
import { sendMessage } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveChatBox);
