import { connect } from 'react-redux';
import User from './user';
import { getUser, receiveUser } from '../../actions/user_actions';
import { receiveCurrentSection } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  receiveUser: user => dispatch(receiveUser(user)),
  receiveCurrentSection: section => dispatch(receiveCurrentSection(section))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
