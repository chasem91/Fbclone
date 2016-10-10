import { GET_POSTS, CREATE_POST, receivePosts, createPost } from '../actions/timeline_actions';
import { fetchPosts, postPost } from '../util/timeline_api_util';


export default ({ dispatch }) => next => action => {
  switch(action.type){
    case GET_POSTS:
      const fetchPostsSuccess = posts => {
        dispatch(receivePosts(posts));
      };
      fetchPosts(action.user_id, fetchPostsSuccess);
      return next(action);
    case CREATE_POST:
      postPost(action.post, action.user_id, dispatch)
      return next(action)
    default:
      return next(action);
  }
};
