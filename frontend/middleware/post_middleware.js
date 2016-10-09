import { GET_COMMENTS, receiveComments } from '../actions/post_actions';
import { fetchComments } from '../util/post_api_util';


export default ({ dispatch }) => next => action => {
  switch(action.type){
    case GET_COMMENTS:
      const fetchCommentsSuccess = comments => {
        dispatch(receiveComments(comments));
      };
      fetchComments(action.post_id, fetchCommentsSuccess);
      return next(action);
    default:
      return next(action);
  }
};
