import { RECEIVE_PROFILE, RECEIVE_PROFILES } from '../actions/profile_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
    profiles: [],
    currentProfile: {
      first_name: "",
      last_name: "",
      birthday: "",
      gender: ""
    }
  }
);

const ProfileReducer = (state = _initialState, action) => {
  const mergeFunc = merge;
  switch(action.type) {
    case RECEIVE_PROFILE:
      return merge({}, state, {
        currentProfile: action.currentProfile
      });
    case RECEIVE_PROFILES:
      return merge({}, state, {
        profiles: action.profiles
      });
    default:
      return state;
  }
};

export default ProfileReducer;
