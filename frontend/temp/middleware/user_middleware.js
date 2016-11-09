// import {
//   GET_USER,
//   GET_USERS,
//   GET_FRIEND_REQUESTS,
//   ACCEPT_REQUEST,
//   REQUEST_FRIEND,
//   GET_REQUESTED_FRIENDS,
//   CREATE_LIKE,
//   receiveUser,
//   receiveUsers,
//   getFriendRequests,
//   receiveFriendRequests,
//   receiveFriend,
//   removeRequest,
//   receiveMadeRequest,
//   receiveRequestedFriends,
//   createLike,
//   receiveNewsfeedLike
// } from '../actions/user_actions';
//
// import {
//   receivePosts
// } from '../actions/timeline_actions';
//
// import {
//   receiveLike
// } from '../actions/post_actions';
//
// import {
//   fetchUser,
//   fetchUsers,
//   fetchFriendRequests,
//   acceptFriend,
//   postFriendRequest,
//   fetchRequestedFriends,
//   postLike
// } from '../util/user_api_util';
//
// export default ({getState, dispatch}) => next => action => {
//   switch(action.type){
//     case GET_USER:
//       const fetchUserSuccess = user => {
//         dispatch(receiveUser(user));
//         dispatch(receivePosts(user.timeline_posts));
//         if (store.getState().session.currentUser.id === user.id) {
//           dispatch(receiveFriendRequests(user.friend_requests));
//         }
//       };
//       fetchUser(action.id, fetchUserSuccess);
//       return next(action);
//
//
//     case GET_USERS:
//       const fetchUsersSuccess = users => {
//         dispatch(receiveUsers(users));
//       };
//       fetchUsers(action.string, fetchUsersSuccess);
//       return next(action);
//
//
//     case GET_FRIEND_REQUESTS:
//       const fetchFriendRequestsSuccess = requests => {
//         dispatch(receiveFriendRequests(requests.friend_requests));
//         dispatch(receiveRequestedFriends(requests.requested_friends));
//       }
//       fetchFriendRequests(action.user_id, fetchFriendRequestsSuccess);
//       return next(action)
//
//
//     case ACCEPT_REQUEST:
//       const acceptFriendSuccess = friend => {
//         dispatch(receiveFriend(friend));
//         dispatch(removeRequest(friend));
//       }
//       acceptFriend(action.user_id, action.friend_id, acceptFriendSuccess);
//       return next(action);
//
//
//     case REQUEST_FRIEND:
//       const postFriendRequestSuccess = friend => {
//         dispatch(receiveMadeRequest(friend));
//       }
//       postFriendRequest(action.user_id, action.friend_id, postFriendRequestSuccess);
//       return next(action);
//
//
//     case CREATE_LIKE:
//       const postLikeSuccess = like => {
//         dispatch(receiveNewsfeedLike(like));
//         dispatch(receiveLike(like));
//       }
//       postLike(action.liker_id, action.likeable_id, action.likeable_type, postLikeSuccess);
//     default:
//       return next(action);
//
//
//   }
// };
