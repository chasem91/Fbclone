import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
  RECEIVE_FRIEND,
  REMOVE_REQUEST,
  RECEIVE_SENT_REQUEST,
  RECEIVE_CHAT_BOX,
  RECEIVE_MESSAGE,
  REMOVE_CHAT_BOX,
  RECEIVE_CONVERSATION,
  RECEIVE_CURRENT_SECTION,
  RECEIVE_LIKE,
  RECEIVE_COMMENT,
  RECEIVE_POST,
  RECEIVE_USERS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {

  let newState = merge({}, state);

  switch(action.type) {

    case RECEIVE_USERS:
      newState.currentUser.users = action.users
      return newState;

    case RECEIVE_POST:
      const newPost = action.post[ Object.keys(action.post)[0] ];
      newState.currentUser.newsfeedPosts[ newPost.id ] = newPost;
      return newState;

    case RECEIVE_COMMENT:
      const comment = action.comment[ Object.keys(action.comment)[0] ];
      const post = newState.currentUser.newsfeedPosts[ comment.post_id ];
      if (post) {
        newState.currentUser.newsfeedPosts[ comment.post_id ].comments[comment.id] = comment;
        return newState;
      } else {
        return state;
      }

    case RECEIVE_LIKE:
      const like = action.like[ Object.keys(action.like)[0] ];
      if (like.likeable.type === "Post") {
        const post = newState.currentUser.newsfeedPosts[ like.likeable.id ];
        if (post) {
          newState.currentUser.newsfeedPosts[ like.likeable.id ].likes[like.id] = like;
        }
        return newState;
      } else {
        return state;
      }

    case RECEIVE_CURRENT_SECTION:
      newState.currentUser.currentSection = action.section;
      return newState;

    case RECEIVE_CONVERSATION:
      const convoIndex = Object.keys(action.conversation)[0];
      newState.currentUser.conversations[convoIndex] = action.conversation[convoIndex];
      return newState;

    case REMOVE_CHAT_BOX:
      delete newState.currentUser.chatBoxes[action.id];
      return newState;

    case RECEIVE_MESSAGE:
      const message = action.message;
      newState.currentUser.conversations[message.conversation_id].messages[message.id] = message;
      return newState;

    case RECEIVE_CHAT_BOX:
      return merge({}, state, {
        currentUser: {
          chatBoxes: action.userId
        }
      });

    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });

    case RECEIVE_FRIEND:
      const newFriend = {}
      newFriend[action.friend.id] = action.friend;
      return merge({}, state, {
        currentUser: {
          friends: newFriend
        }
      });

    case REMOVE_REQUEST:
      delete newState.currentUser.receivedRequests[Object.keys(action.friend)[0]];
      return newState;

    case RECEIVE_SENT_REQUEST:
      return merge({}, state, {
        currentUser: {
          sentRequests: action.request
        }
      });

    case LOGOUT:
      return merge({}, _nullUser);

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });

    default:
      return state;
  }
};

export default SessionReducer;
