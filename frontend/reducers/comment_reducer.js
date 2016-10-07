import { RECEIVE_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
  }
);

const CommentReducer = (state = _initialState, action) => {
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, {
        comments: action.comments
      });
    default:
      return state;
  }
};

export default CommentReducer;
