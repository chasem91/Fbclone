import {  GET_PROFILE,
          receiveProfile
       } from '../actions/profile_actions';

import { fetchProfile } from '../util/profile_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = profile => dispatch(receiveProfile(profile));
  switch(action.type){
    case GET_PROFILE:
      fetchProfile(action.username, successCallback);
      return next(action);
    default:
      return next(action);
  }
};
