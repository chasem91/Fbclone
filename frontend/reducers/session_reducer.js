import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
  RECEIVE_FRIEND,
  REMOVE_REQUEST,
  RECEIVE_SENT_REQUEST,
  RECEIVE_CHAT_BOX,
  RECEIVE_MESSAGE
} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {

  let newState = merge({}, state);

  switch(action.type) {

    case RECEIVE_MESSAGE:
      // newState.currentUser.chatBoxes[action.message[Object.keys(action.message)[0]].user_id] = action;
      const message = action.message[Object.keys(action.message)[0]];
      const chatBox = newState.currentUser.chatBoxes[message.user_id];
      chatBox.conversation = chatBox.conversation || {};
      chatBox.conversation[message.id] = message;
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
