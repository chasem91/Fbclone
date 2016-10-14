export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const GET_FRIEND_REQUESTS = "GET_FRIEND_REQUESTS";
export const RECEIVE_FRIEND_REQUESTS = "RECEIVE_FRIEND_REQUESTS";
export const ACCEPT_REQUEST = "ACCEPT_REQUEST";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_REQUEST = "REMOVE_REQUEST";
export const REQUEST_FRIEND = "REQUEST_FRIEND";
export const RECEIVE_MADE_REQUEST = "RECEIVE_MADE_REQUEST";
// export const GET_REQUESTED_FRIENDS = "GET_REQUESTED_FRIENDS";
export const RECEIVE_REQUESTED_FRIENDS = "RECEIVE_REQUESTED_FRIENDS";
export const RECEIVE_NEWSFEED_POST = "RECEIVE_NEWSFEED_POST";
export const RECEIVE_NEWSFEED_COMMENT = "RECEIVE_NEWSFEED_COMMENT";
export const CREATE_LIKE = "CREATE_LIKE";
export const RECEIVE_NEWSFEED_LIKE = "RECEIVE_NEWSFEED_LIKE";


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

export const removeRequest = friend => ({
  type: REMOVE_REQUEST,
  friend
});

export const requestFriend = (user_id, friend_id) => ({
  type: REQUEST_FRIEND,
  user_id,
  friend_id
});

export const receiveMadeRequest = friend => ({
  type: RECEIVE_MADE_REQUEST,
  friend
});

// export const getRequestedFriends = user_id => ({
//   type: GET_REQUESTED_FRIENDS,
//   user_id
// });

export const receiveRequestedFriends = requestedFriends => ({
  type: RECEIVE_REQUESTED_FRIENDS,
  requestedFriends
});

export const receiveNewsfeedPost = post => ({
  type: RECEIVE_NEWSFEED_POST,
  post
});

export const receiveNewsfeedComment = (comment, post_id) => ({
  type: RECEIVE_NEWSFEED_COMMENT,
  comment,
  post_id
});

export const createLike = (liker_id, likeable_id, likeable_type) => ({
  type: CREATE_LIKE,
  liker_id,
  likeable_id,
  likeable_type
});

export const receiveNewsfeedLike = like => ({
  type: RECEIVE_NEWSFEED_LIKE,
  like
});
