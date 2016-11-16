import { connect } from 'react-redux';
import LiveChatBoxes from './live_chat_boxes';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveChatBoxes);
