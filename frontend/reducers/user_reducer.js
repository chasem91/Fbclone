import {
  RECEIVE_USER,
  RECEIVE_FRIEND_REQUESTS,
  REMOVE_REQUEST,
  RECEIVE_MADE_REQUEST,
  RECEIVE_REQUESTED_FRIENDS,
  RECEIVE_FRIEND
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
      posts: {},
      friends: {}
    },
    friendRequests: {

    },
    requestedFriends: {

    },
    newsfeedPosts: {

    }
  }
);

const UserReducer = (state = _initialState, action) => {
  let newState;
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
      newState = merge({}, state);
      delete newState.friendRequests[Object.keys(action.friend)[0]];
      return newState;
    case RECEIVE_REQUESTED_FRIENDS:
      newState = state;
      newState.requestedFriends = action.requestedFriends || {};
      return newState;
    case RECEIVE_MADE_REQUEST:
      return merge({}, state, {
        requestedFriends: action.friend
      });
    case RECEIVE_FRIEND:
      return merge({}, state, {
        user: {
          friends: action.friend
        }
      });
    default:
      return state;
  }
};

export default UserReducer;
