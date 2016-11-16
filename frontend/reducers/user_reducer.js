import {
  RECEIVE_USER,
  RECEIVE_LIKE
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
    friends: {}
  }
);

const UserReducer = (state = _initialState, action) => {
  let newState = merge({}, state);
  switch(action.type) {

    case RECEIVE_USER:
      newState = merge({}, state, action.user);
      newState.timelinePosts = action.user.timelinePosts || {};
      newState.friends = action.user.friends || {};
      return newState;


    case RECEIVE_LIKE:
      if (action.like[Object.keys(action.like)[0]].likeable.type === "Post") {
        const post = newState.timelinePosts[ action.like[ parseInt(Object.keys(action.like)[0]) ].likeable.id ];

        if (post) {
          post.likes[parseInt(Object.keys(action.like)[0])] = action.like[ Object.keys(action.like)[0] ];
        }

        return newState;
      }

      return state;

    default:
      return state;
  }
};

export default UserReducer;
