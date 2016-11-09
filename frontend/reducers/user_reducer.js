import {
  RECEIVE_USER,
} from '../actions/user_actions';

import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
    id: "",
    first_name: "",
    last_name: "",
    birthday: "",
    gender: "",
    timelinePosts: {},
    friends: {},
    friendRequests: {},
    requestedFriends: {},
    newsfeedPosts: {}
  }
);

const UserReducer = (state = _initialState, action) => {
  let newState;
  switch(action.type) {

    case RECEIVE_USER:
      newState = merge({}, state, action.user);
      newState.timelinePosts = action.user.timelinePosts || {};
      newState.friends = action.user.friends || {};
      newState.friendRequests = action.user.friendRequests || {};
      newState.requestedFriends = action.user.requestedFriends || {};
      newState.newsfeedPosts = action.user.newsfeedPosts || {};
      return newState;

    default:
      return state;
  }
};

export default UserReducer;
