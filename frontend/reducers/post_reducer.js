import { RECEIVE_POST, RECEIVE_POSTS, RECEIVE_COMMENT } from '../actions/post_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
    id: "",
    author_id: "",
    profile_id: "",
    content: "",
    created_at: "",
    comments: []
  }
);

const PostReducer = (state = _initialState, action) => {
  switch(action.type) {
    case RECEIVE_COMMENT:
      return merge({}, state, {
        currentProfile: {

        }
      });
    case RECEIVE_POST:
      return merge({}, state, {
        currentPost: action.post
      });
    case RECEIVE_POSTS:
      return merge({}, state, {
        posts: action.posts
      });
    default:
      return state;
  }
};

export default PostReducer;
