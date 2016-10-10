import { RECEIVE_COMMENTS, RECEIVE_POST, RECEIVE_COMMENT } from '../actions/post_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze({
  posts: {
    77: {
      id: 123,
      author_id: 321,
      user_id: 869,
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
    },
    78: {
      id: 123,
      author_id: 321,
      user_id: 869,
      content: "Sample Post 2",
      created_at: "05-23-1995",
      comments: {}
    },
    79: {
      id: 123,
      author_id: 321,
      user_id: 869,
      content: "Sample Post 3",
      created_at: "05-23-1995",
      comments: {}
    },
    80: {
      id: 123,
      author_id: 321,
      user_id: 869,
      content: "Sample Post 4",
      created_at: "05-23-1995",
      comments: {}
    }
  }
});

const PostReducer = (state = _initialState, action) => {
  switch(action.type) {
    case RECEIVE_POST:
      const newPosts = state.posts;
      // newPosts[action.post.id] = {
      //   id: action.post.id,
      //   author_id: action.post.author_id,
      //   user_id: action.post.user_id,
      //   content: action.post.content,
      //   created_at: action.post.created_at,
      //   comments: {}
      // };
      newPosts[action.post.id] = action.post
      return merge({}, state, {newPosts});
    case RECEIVE_COMMENTS:
      if (action.comments.length === 0) {
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
      const newState = state;
      newState.posts[action.post_id].comments[action.comment.id]=action.comment;
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default PostReducer;
