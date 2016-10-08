import { RECEIVE_POSTS } from '../actions/timeline_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
    posts: []
  }
);

const TimelineReducer = (state = _initialState, action) => {
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, {
        posts: action.posts
      });
    default:
      return state;
  }
};

export default TimelineReducer;
