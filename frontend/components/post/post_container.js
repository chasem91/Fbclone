import { connect } from 'react-redux';
import Post from './post';
import { createComment } from '../../actions/comment_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  observedUser: state.profile.observedUser,
  currentProfile: state.profile.currentProfile,
  currentPhoto: state.photo.currentPhoto
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
