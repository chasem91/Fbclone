import {  GET_PROFILE, GET_PROFILES, receiveProfile, receiveProfiles } from '../actions/profile_actions';
import { fetchProfile, fetchProfiles } from '../util/profile_api_util';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GET_PROFILE:
      const fetchProfileSuccess = profile => {
        console.log("fetchProfileSuccess is being called");
        dispatch(receiveProfile(profile));
      };
      fetchProfile(action.id, fetchProfileSuccess);
      return next(action);
    case GET_PROFILES:
      const fetchProfilesSuccess = profiles => {
        dispatch(receiveProfiles(profiles));
      };
      fetchProfiles(fetchProfilesSuccess);
      return next(action);
    default:
      return next(action);
  }
};
