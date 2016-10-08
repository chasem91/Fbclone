import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
    user: {
      first_name: "",
      last_name: "",
      birthday: "",
      gender: "",
      posts: []
    }
  }
);

const UserReducer = (state = _initialState, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, {
        user: action.user
      });
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
