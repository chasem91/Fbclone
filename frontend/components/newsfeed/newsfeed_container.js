import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import { login } from '../../actions/session_actions';
import Newsfeed from './newsfeed';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user.profile
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newsfeed);
