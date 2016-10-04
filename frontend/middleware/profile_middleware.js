import {  GET_PROFILE, GET_PROFILES, receiveProfile, receiveProfiles } from '../actions/profile_actions';
import { fetchProfile, fetchProfiles } from '../util/profile_api_util';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GET_PROFILE:
      const fetchProfileSuccess = profile => {
        dispatch(receiveProfile(profile));
      };
      fetchProfile(action.id, fetchProfileSuccess);
      return next(action);
    case GET_PROFILES:
      const fetchProfilesSuccess = profiles => {
        debugger
        dispatch(receiveProfiles(profiles));
      };
      fetchProfiles(fetchProfilesSuccess);
    default:
      return next(action);
  }
};
