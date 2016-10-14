import { connect } from 'react-redux';
import Post from './post';
import { getComments, receivePost, createComment } from '../../actions/post_actions';
import { createLike } from '../../actions/user_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    user: state.user.user,
    postFromState: state.post,
    timelinePosts: state.timeline.posts.posts
  };
};

const mapDispatchToProps = dispatch => ({
  receivePost: post => dispatch(receivePost(post)),
  getComments: post_id => dispatch(getComments(post_id)),
  createComment: (comment, post_id) => dispatch(createComment(comment, post_id)),
  createLike: (liker_id, likeable_id, likeable_type) => dispatch(createLike(liker_id, likeable_id, likeable_type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
