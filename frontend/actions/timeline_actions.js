export const GET_POSTS = "GET_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const CREATE_POST = "CREATE_POST";
export const RECEIVE_POST_ON_TIMELINE = "RECEIVE_POST_ON_TIMELINE";

export const getPosts = user_id => ({
  type: GET_POSTS,
  user_id
});

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const createPost = (post, user_id) => ({
  type: CREATE_POST,
  post,
  user_id
});

export const receivePostOnTimeline = post => ({
  type: RECEIVE_POST_ON_TIMELINE,
  post
});
