export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const GET_FRIEND_REQUESTS = "GET_FRIEND_REQUESTS";
export const RECEIVE_FRIEND_REQUESTS = "RECEIVE_FRIEND_REQUESTS";
export const ACCEPT_REQUEST = "ACCEPT_REQUEST";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";

export const getUser = id => ({
  type: GET_USER,
  id
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const getFriendRequests = user_id => ({
  type: GET_FRIEND_REQUESTS,
  user_id
});

export const receiveFriendRequests = friendRequests => ({
  type: RECEIVE_FRIEND_REQUESTS,
  friendRequests
});

export const acceptRequest = (user_id, friend_id) => ({
  type: ACCEPT_REQUEST,
  user_id,
  friend_id
});

export const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
});
