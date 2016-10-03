import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile_actions';
import Profile from './profile';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentProfile: state.session.currentProfile
});

const mapDispatchToProps = dispatch => ({
  getProfile: username => dispatch(getProfile(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
