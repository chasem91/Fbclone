import { connect } from 'react-redux';
import NewPostForm from './new_post_form';
import { createPost } from '../../../actions/timeline_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    user: state.user.user
  };
};


const mapDispatchToProps = dispatch => ({
  createPost: (post, user_id) => dispatch(createPost(post, user_id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostForm);
