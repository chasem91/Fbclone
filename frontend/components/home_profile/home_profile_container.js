import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile_actions';
import { getPhoto } from '../../actions/photo_actions';
import { getComment } from '../../actions/comment_actions';
import HomeProfile from './home_profile';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  observedUser: state.profile.observedUser,
  currentProfile: state.profile.currentProfile,
  currentPhoto: state.photo.currentPhoto,
  currentComment: state.comment.currentComment
});

const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(getProfile(id)),
  getPhoto: id => dispatch(getPhoto(id)),
  getComment: id => dispatch(getComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeProfile);
