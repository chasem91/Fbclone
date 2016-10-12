import {
  RECEIVE_USER,
  RECEIVE_FRIEND_REQUESTS,
  REMOVE_REQUEST,
  RECEIVE_MADE_REQUEST,
  RECEIVE_REQUESTED_FRIENDS,
  RECEIVE_FRIEND,
  RECEIVE_NEWSFEED_POST,
  RECEIVE_NEWSFEED_COMMENT
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
      friends: {},
      newsfeed_posts: {}
    },
    friendRequests: {

    },
    requestedFriends: {

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
    case RECEIVE_NEWSFEED_POST:
      return merge({}, state, {
        user: {
          newsfeed_posts: action.post
        }
      });
    case RECEIVE_NEWSFEED_COMMENT:
      newState = state;
      newState.user
        .newsfeed_posts[action.post_id]
        .comments = action.comment;
        // [Object.keys(actions.comment)[0]]
      return merge({}, state, newState );
    default:
      return state;
  }
};

export default UserReducer;
