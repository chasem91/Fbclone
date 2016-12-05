import { connect } from 'react-redux'
import SearchBar from './search_bar'
import { getUsers } from '../../../actions/user_actions'
import { receiveUsers } from '../../../actions/session_actions'

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  getUsers: string => dispatch(getUsers(string)),
  receiveUsers: users => dispatch(receiveUsers(users))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
