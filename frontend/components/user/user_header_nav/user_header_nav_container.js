import { connect } from 'react-redux';
import UserHeaderNav from './user_header_nav';
import { receiveCurrentSection } from '../../../actions/session_actions'

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  receiveCurrentSection: section => dispatch(receiveCurrentSection(section))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeaderNav);
