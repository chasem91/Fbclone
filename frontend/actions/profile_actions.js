export const GET_PROFILE = "GET_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const getProfile = username => ({
  type: GET_PROFILE,
  username: username
});

export const receiveProfile = currentProfile => ({
  type: RECEIVE_PROFILE,
  currentProfile
});
