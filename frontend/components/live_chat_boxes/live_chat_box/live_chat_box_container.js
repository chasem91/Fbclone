import { connect } from 'react-redux';
import LiveChatBox from './live_chat_box';
import { sendMessage, getConversation } from '../../../actions/user_actions';
import { removeChatBox } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message)),
  getConversation: (user_id, participant_id) => dispatch(getConversation(user_id, participant_id)),
  removeChatBox: id => dispatch(removeChatBox(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveChatBox);
