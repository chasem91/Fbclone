import { connect } from 'react-redux'
import Messages from './messages'
import { receiveChatBox } from '../../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  receiveChatBox: id => dispatch(receiveChatBox(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)
