import {
  GET_USER,
  receiveUser,
} from '../actions/user_actions';

import {
  fetchUser,
} from '../util/user_api_util';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GET_USER:
      const fetchUserSuccess = user => {
        dispatch(receiveUser(user));
      };
      fetchUser(action.id, fetchUserSuccess);
      return next(action);

    default:
      return next(action);
  }
};
