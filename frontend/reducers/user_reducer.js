import {
  RECEIVE_USER,
  RECEIVE_FRIEND_REQUESTS,
  REMOVE_REQUEST,
  RECEIVE_MADE_REQUEST
} from '../actions/user_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
    user: {
      id: "",
      first_name: "",
      last_name: "",
      birthday: "",
      gender: "",
      posts: []
    },
    friendRequests: {

    },
    requestedFriends: {
      2: {"1": 1}
    }
  }
);

const UserReducer = (state = _initialState, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, {
        user: action.user
      });
    case RECEIVE_FRIEND_REQUESTS:
      return merge({}, state, {
        friendRequests: action.friendRequests
      });
    case REMOVE_REQUEST:
      let newState = merge({}, state);
      delete newState.friendRequests[Object.keys(action.friend)[0]];
      return newState;
    default:
      return state;
  }
};

export default UserReducer;