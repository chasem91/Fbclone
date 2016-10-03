import { RECEIVE_PROFILE } from '../actions/profile_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentProfile: {
    first_name: "Chase",
    last_name: "Martin",
    birthday: "02-05-1991",
    gender: "male"
  }
});

const ProfileReducer = (state = _nullUser, action) => {
  debugger
  switch(action.type) {
    case RECEIVE_PROFILE:
      const currentProfile = action.currentProfile;
      return merge({}, _nullUser, {
        currentProfile
      });
    default:
      return state;
  }
};



export default ProfileReducer;
