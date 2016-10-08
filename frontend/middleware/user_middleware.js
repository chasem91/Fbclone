import {  GET_USER, GET_USERS, receiveUser, receiveUsers } from '../actions/user_actions';
import { fetchUser, fetchUsers } from '../util/user_api_util';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GET_USER:
      const fetchUserSuccess = user => {
        dispatch(receiveUser(user));
      };
      fetchUser(action.id, fetchUserSuccess);
      return next(action);
    case GET_USERS:
      const fetchUsersSuccess = users => {
        dispatch(receiveUsers(users));
      };
      fetchUsers(fetchUsersSuccess);
      return next(action);
    default:
      return next(action);
  }
};
