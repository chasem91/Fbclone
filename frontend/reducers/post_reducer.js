import { RECEIVE_COMMENTS, RECEIVE_POST, RECEIVE_COMMENT } from '../actions/post_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze({
  posts: {
    77: {
      id: 123,
      author: {
        id: 321,
        full_name: ""
      },
      user: {
        id: 869,
        full_name: ""
      },
      content: "Sample Post 1",
      created_at: "05-23-1995",
      comments: {
        1: {
          id: 1,
          author_id: 1,
          post_id: 77,
          content: "Sample Comment 1",
          created_at: "01-01-2000"
        }
      }
    }
  }
});

const PostReducer = (state = _initialState, action) => {
  switch(action.type) {
    case RECEIVE_POST:
      const newPosts = state.posts;
      newPosts[action.post.id] = action.post;
      return merge({}, state, {newPosts});
    case RECEIVE_COMMENTS:
      if (Object.keys(action.comments).length === 0) {
        return state;
      } else {
        const newPostComments = state.posts[action.post_id];
        newPostComments.comments = action.comments;
        return merge({}, state, {
          newPostComments
        });
      }
      break;
    case RECEIVE_COMMENT:
      window.merge = merge;
      const newState = { posts: { [action.post_id]: {
            comments: action.comment
          } } };
      return merge( {}, state, newState);
    default:
      return state;
  }
};

export default PostReducer;
