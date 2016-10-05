import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile_actions';
import HomeProfile from './home_profile';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  observedUser: state.profile.observedUser,
  currentProfile: state.profile.currentProfile
});

const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(getProfile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeProfile);
