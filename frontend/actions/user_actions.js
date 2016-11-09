export const GET_USER = "GET_USER";
export const RECEIVE_USER = "RECEIVE_USER";


export const getUser = id => ({
  type: GET_USER,
  id
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
