import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile_actions';
import Profile from './profile';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  observedUser: state.profile.observedUser,
  currentProfile: state.profile.currentProfile,
});

const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(getProfile(id)),
  getPhoto: id => dispatch(getPhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
