import { connect } from 'react-redux'
import FriendRequests from './friend_requests'

import { acceptRequest } from '../../../actions/user_actions'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  acceptRequest: (userId, friendId) => dispatch(acceptRequest(userId, friendId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequests)
