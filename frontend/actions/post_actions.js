export const RECEIVE_POST = "RECEIVE_POST";
export const CREATE_POST = "CREATE_POST";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const GET_POST = "GET_POST";

export const getPost = id => ({
  type: GET_POST,
  id
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const createPost = post => ({
  type: CREATE_POST,
  post
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});
