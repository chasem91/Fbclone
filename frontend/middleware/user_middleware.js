import {
  GET_USER,
  GET_USERS,
  GET_FRIEND_REQUESTS,
  receiveUser,
  receiveUsers,
  getFriendRequests,
  receiveFriendRequests
} from '../actions/user_actions';

import {
  fetchUser,
  fetchUsers,
  fetchFriendRequests
} from '../util/user_api_util';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GET_USER:
      const fetchUserSuccess = user => {
        dispatch(receiveUser(user));
      };
      fetchUser(action.id, fetchUserSuccess);
      return next(action);
    case GET_USERS:
      const fetchUsersSuccess = users => {
        dispatch(receiveUsers(users));
      };
      fetchUsers(fetchUsersSuccess);
      return next(action);
    case GET_FRIEND_REQUESTS:
      const fetchFriendRequestsSuccess = friendRequests => {
        dispatch(receiveFriendRequests(friendRequests));
      }
      fetchFriendRequests(action.user_id, fetchFriendRequestsSuccess);
    default:
      return next(action);
  }
};
