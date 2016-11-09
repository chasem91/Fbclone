import {
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_FRIEND_REQUESTS,
  REMOVE_REQUEST,
  RECEIVE_MADE_REQUEST,
  RECEIVE_REQUESTED_FRIENDS,
  RECEIVE_NEWSFEED_POST,
  RECEIVE_NEWSFEED_COMMENT,
  RECEIVE_NEWSFEED_LIKE,
  RECEIVE_FRIENDS
} from '../actions/user_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
    users: [],
    profile: {
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
        profile: action.user
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
      // debugger
      delete newState.friendRequests[action.friend.id];
      return newState;


    case RECEIVE_REQUESTED_FRIENDS:
      newState = merge({}, state);
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
      if (state.profile.newsfeed_posts[action.post_id] === undefined) {
        return state;
      } else {
        newState = { user: { newsfeed_posts: { [action.post_id]: {
                comments: action.comment
              } } } };
        return merge( {}, state, newState);
      }
      return newState;


    case RECEIVE_NEWSFEED_LIKE:
    if (state.profile.newsfeed_posts[action
            .like[Object.keys(action.like)[0]].likeable.id] === undefined) {
        return state;
      } else if (action.like[Object.keys(action.like)[0]].likeable.type === "Post") {
        // debugger
        return merge({}, state, {
          profile: {
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
