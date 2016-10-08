import { connect } from 'react-redux';
import { getUser } from '../../actions/user_actions';
import User from './user';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  getPhoto: id => dispatch(getPhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
