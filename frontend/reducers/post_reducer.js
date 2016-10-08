import { RECEIVE_COMMENTS, RECEIVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze({
  posts: {
    null: {
      id: null,
      author_id: null,
      user_id: null,
      content: "",
      created_at: "",
      comments: []
    }
  }
});

const PostReducer = (state = _initialState, action) => {
  switch(action.type) {
    case RECEIVE_POST:
      return merge({}, state, {
        id: action.post.id,
        author_id: action.post.author_id,
        user_id: action.post.user_id,
        content: action.post.content,
        created_at: action.post.created_at
      });
    case RECEIVE_COMMENTS:
      return merge({}, state, {
        comments: action.comments
      });
    default:
      return state;
  }
};

export default PostReducer;
