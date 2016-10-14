export const GET_COMMENT = "GET_COMMENT";
export const GET_COMMENTS = "GET_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const getComment = id => ({
  type: GET_COMMENT,
  id
});

export const getComments = post_id => ({
  type: GET_COMMENTS,
  post_id
});

export const receiveComment = (comment, post_id) => ({
  type: RECEIVE_COMMENT,
  comment,
  post_id
});

export const receiveComments = (comments, post_id) => ({
  type: RECEIVE_COMMENTS,
  comments,
  post_id
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const createComment = (comment, post_id) => ({
  type: CREATE_COMMENT,
  comment,
  post_id
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});
