import {  GET_POST, GET_POSTS, CREATE_POST, receivePost, receivePosts } from '../actions/post_actions';
import { fetchPost, fetchPosts, storePost } from '../util/post_api_util';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GET_POST:
      const fetchPostSuccess = post => {
        dispatch(receivePost(post));
      };
      fetchPost(action.id, fetchPostSuccess);
      return next(action);
    case GET_POSTS:
      const fetchPostsSuccess = posts => {
        dispatch(receivePosts(posts));
      };
      fetchPosts(fetchPostsSuccess);
      return next(action);
    case CREATE_POST:
      const successCallback = post => {
        dispatch(receivePost(post));
      }
      storePost(action.post, successCallback);
      return next(action);
    default:
      return next(action);
  }
};
