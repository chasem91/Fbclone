import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile_actions';
import ProfileIndex from './profile_index';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  profiles: state.profile.profiles
});

const mapDispatchToProps = dispatch => ({
  getProfiles: profiles => dispatch(getProfiles(profiles))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileIndex);
