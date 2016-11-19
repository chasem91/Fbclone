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
  RECEIVE_CURRENT_SECTION
} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {

  let newState = merge({}, state);

  switch(action.type) {

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
