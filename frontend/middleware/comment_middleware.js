import {  GET_COMMENT, GET_COMMENTS, CREATE_COMMENT, receiveComments } from '../actions/comment_actions';
import {  receiveComment } from '../actions/post_actions';
import { fetchComment, fetchComments, storeComment } from '../util/comment_api_util';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GET_COMMENT:
      const fetchCommentSuccess = comment => {
        dispatch(receiveComment(comment));
      };
      fetchComment(action.id, fetchCommentSuccess);
      return next(action);
    case GET_COMMENTS:
      const fetchCommentsSuccess = comments => {
        dispatch(receiveComments(comments));
      };
      fetchComments(fetchCommentsSuccess);
      return next(action);
    case CREATE_COMMENT:
      const successCallback = comment => {
        dispatch(receiveComment(comment));
      }
      storeComment(action.comment, successCallback);
      return next(action);
    default:
      return next(action);
  }
};
