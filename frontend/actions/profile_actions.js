export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILES = "GET_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_PROFILES = "RECEIVE_PROFILES";

export const getProfile = id => ({
  type: GET_PROFILE,
  id
});

export const getProfiles = () => ({
  type: GET_PROFILES,
});

export const receiveProfile = currentProfile => ({
  type: RECEIVE_PROFILE,
  currentProfile
});

export const receiveProfiles = profiles => ({
  type: RECEIVE_PROFILES,
  profiles
});
