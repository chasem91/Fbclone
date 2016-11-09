import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Newsfeed from './newsfeed';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newsfeed);
