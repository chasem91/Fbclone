export const GET_COMMENT = "GET_COMMENT";
export const GET_COMMENTS = "GET_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_POST = "RECEIVE_POST";

export const getComment = id => ({
  type: GET_COMMENT,
  id
});

export const getComments = post_id => ({
  type: GET_COMMENTS,
  post_id
});

export const receiveComment = currentComment => ({
  type: RECEIVE_COMMENT,
  currentComment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});
