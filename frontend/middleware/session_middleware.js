import { receiveCurrentUser,
         receiveConversations,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

import { hashHistory } from 'react-router';

export default ({getState, dispatch}) => next => action => {

  const successCallback = user => {
    dispatch(receiveCurrentUser(user));
  };

  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){

    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);


    case LOGOUT:
      logout(() => {
        next(action);
        hashHistory.push('/login');
      });
      break;


    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);


    default:
      return next(action);

  }
};
