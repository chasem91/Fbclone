import {
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_FRIEND_REQUESTS,
  REMOVE_REQUEST,
  RECEIVE_MADE_REQUEST,
  RECEIVE_REQUESTED_FRIENDS,
  RECEIVE_NEWSFEED_POST,
  RECEIVE_NEWSFEED_COMMENT,
  RECEIVE_NEWSFEED_LIKE
} from '../actions/user_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
    users: [],
    user: {
      id: "",
      first_name: "",
      last_name: "",
      birthday: "",
      gender: "",
      posts: {},
      friends: {},
      newsfeed_posts: {

      }
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
    case RECEIVE_USERS:
      newState = state;
      newState.users = action.users;
      return merge({}, state, newState);
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
    case RECEIVE_NEWSFEED_POST:
      return merge({}, state, {
        user: {
          newsfeed_posts: action.post
        }
      });
    case RECEIVE_NEWSFEED_COMMENT:
      if (state.user.newsfeed_posts[action.post_id] === undefined) {
        return state;
      } else {
        newState = { user: { newsfeed_posts: { [action.post_id]: {
                comments: action.comment
              } } } };
        return merge( {}, state, newState);
      }
      return newState;
    case RECEIVE_NEWSFEED_LIKE:
      if (state.user.newsfeed_posts[action
            .like[Object.keys(action.like)[0]].likeable.id] === undefined) {
        return state;
      } else if (action.like[Object.keys(action.like)[0]].likeable.type === "Post") {
        return merge({}, state, {
          user: {
            newsfeed_posts: {
              [action.like[Object.keys(action.like)[0]].likeable.id]: {
                likes: action.like
              }
            }
          }
        });
      }
      return state;
    default:
      return state;
  }
};

export default UserReducer;
