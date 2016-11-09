// import { GET_COMMENTS, CREATE_COMMENT, receiveComments, receiveComment } from '../actions/post_actions';
// import { fetchComments, postComment } from '../util/post_api_util';
//
//
// export default ({ dispatch }) => next => action => {
//   switch(action.type){
//     case GET_COMMENTS:
//       fetchComments(action.post_id, dispatch);
//       return next(action);
//     case CREATE_COMMENT:
//       postComment(action.comment, action.post_id, dispatch)
//       return next(action);
//     default:
//       return next(action);
//   }
// };
