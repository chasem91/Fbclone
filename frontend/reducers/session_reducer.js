import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
  RECEIVE_FRIEND,
  REMOVE_REQUEST,
  RECEIVE_SENT_REQUEST
} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {

  let newState;

  switch(action.type) {

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
      newState = merge({}, state);
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
