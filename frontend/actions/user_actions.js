export const GET_USER = "GET_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const ACCEPT_REQUEST = "ACCEPT_REQUEST";
export const REQUEST_FRIEND = "REQUEST_FRIEND";
export const CREATE_LIKE = "CREATE_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const GET_CONVERSATION = "GET_CONVERSATION";

export const getConversation = (user_id, participant_id) => ({
  type: GET_CONVERSATION,
  user_id,
  participant_id
});

export const getUser = id => ({
  type: GET_USER,
  id
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const acceptRequest = (userId, friendId) => ({
  type: ACCEPT_REQUEST,
  userId,
  friendId
});

export const requestFriend = (user_id, friend_id) => ({
  type: REQUEST_FRIEND,
  user_id,
  friend_id
});

export const createLike = (liker_id, likeable_id, likeable_type) => ({
  type: CREATE_LIKE,
  liker_id,
  likeable_id,
  likeable_type
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const sendMessage = message => ({
  type: SEND_MESSAGE,
  message
});
