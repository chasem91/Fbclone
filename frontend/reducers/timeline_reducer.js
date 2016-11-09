import {
  RECEIVE_POSTS,
  RECEIVE_POST_ON_TIMELINE,
  RECEIVE_LIKE_ON_TIMELINE
} from '../actions/timeline_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
    posts: {
      posts: {

      }
    }
  }
);

const TimelineReducer = (state = _initialState, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_POSTS:
      return { posts: {
            posts: action.posts
          } };
    case RECEIVE_POST_ON_TIMELINE:
      return merge({}, state, {
        posts: {
          posts: action.post
        }
      });
    default:
      return state;
  }
};

export default TimelineReducer;
