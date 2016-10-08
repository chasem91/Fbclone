export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

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
