import { connect } from 'react-redux';
import Post from './post';

import { createLike, createComment } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
    createComment: (comment, post_id) => dispatch(createComment(comment, post_id)),
    createLike: (liker_id, likeable_id, likeable_type) => dispatch(createLike(liker_id, likeable_id, likeable_type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
