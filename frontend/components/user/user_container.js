import { connect } from 'react-redux';
import User from './user';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
