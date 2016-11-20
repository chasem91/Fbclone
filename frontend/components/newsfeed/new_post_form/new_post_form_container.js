import { connect } from 'react-redux';
import NewPostForm from './new_post_form';
import { createPost } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPostForm);
