export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const RECEIVE_SENT_REQUEST = "RECEIVE_SENT_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST";
export const RECEIVE_CHAT_BOX = "RECEIVE_CHAT_BOX";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const REMOVE_CHAT_BOX = "REMOVE_CHAT_BOX";
export const RECEIVE_CURRENT_SECTION = "RECEIVE_CURRENT_SECTION";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_POST = "RECEIVE_POST";

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveCurrentSection = section => ({
  type: RECEIVE_CURRENT_SECTION,
  section
});

export const removeChatBox = id => ({
  type: REMOVE_CHAT_BOX,
  id
});

export const receiveConversation = conversation => ({
  type: RECEIVE_CONVERSATION,
  conversation
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveChatBox = userId => ({
  type: RECEIVE_CHAT_BOX,
  userId
});

export const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
});

export const receiveMadeRequest = request => ({
  type: RECEIVE_SENT_REQUEST,
  request
});

export const signup = user => ({
  type: SIGNUP,
  user
});

export const login = user => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeRequest = friend => ({
  type: REMOVE_REQUEST,
  friend
});
