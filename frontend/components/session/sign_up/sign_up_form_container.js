import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';
import { login, logout, signup } from '../../../actions/session_actions';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
  login: user  => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
