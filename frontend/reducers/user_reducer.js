import { RECEIVE_USER, RECEIVE_FRIEND_REQUESTS } from '../actions/user_actions';
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
      })
    default:
      return state;
  }
};

export default UserReducer;

// const _initialState = Object.freeze(
//   {
//     currentProfile: {
//       first_name: "",
//       last_name: "",
//       birthday: "",
//       gender: "",
//       posts: [
//         {
//           id: "",
//           author: {
//             id: "",
//             full_name: ""
//           },
//           profile_id: "",
//           content: "",
//           created_at: "",
//           comments: [
//             {
//               id: "",
//               author: {
//                 id: "",
//                 full_name: ""
//               },
//               post_id: "",
//               content: "",
//               created_at: ""
//             }
//           ]
//         }
//       ]
//     }
//   }
// );
