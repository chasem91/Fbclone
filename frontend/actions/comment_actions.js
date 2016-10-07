export const GET_COMMENT = "GET_COMMENT";
export const GET_COMMENTS = "GET_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const CREATE_COMMENT = "CREATE_COMMENT";

export const getComment = id => ({
  type: GET_COMMENT,
  id
});

export const getComments = () => ({
  type: GET_COMMENTS,
});


export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});
