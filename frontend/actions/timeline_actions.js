export const GET_POSTS = "GET_POSTS";

export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const getPosts = user_id => ({
  type: GET_POSTS,
  user_id
});


export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});
