import { GET_POSTS, receivePosts } from '../actions/timeline_actions';
import { fetchPosts } from '../util/timeline_api_util';


export default ({ dispatch }) => next => action => {
  switch(action.type){
    case GET_POSTS:
      const fetchPostsSuccess = posts => {
        dispatch(receivePosts(posts));
      };
      fetchPosts(action.user_id, fetchPostsSuccess);
      return next(action);
    default:
      return next(action);
  }
};
