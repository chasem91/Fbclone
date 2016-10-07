import { connect } from 'react-redux';
import Post from './post';
import { getPost } from '../../actions/post_actions';
import { createComment } from '../../actions/comment_actions';


const mapStateToProps = state => {
  debugger
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  getPost: id => dispatch(getPost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
