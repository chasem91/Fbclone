import { connect } from 'react-redux';
import LogInForm from './log_in_form';
import { login, logout, signup } from '../../../actions/session_actions';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: () => dispatch(signup()),
  login: () => dispatch(login()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm);
