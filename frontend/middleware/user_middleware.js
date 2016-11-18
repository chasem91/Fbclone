import {
  GET_USER,
  receiveUser,
  ACCEPT_REQUEST,
  acceptRequest,
  REQUEST_FRIEND,
  CREATE_LIKE,
  receiveLike,
  SEND_MESSAGE,
  GET_CONVERSATION
} from '../actions/user_actions';

import {
  receiveFriend,
  removeRequest,
  receiveMadeRequest,
  receiveMessage,
  receiveConversation
} from '../actions/session_actions';

import {
  fetchUser,
  acceptFriend,
  postFriendRequest,
  postLike,
  postMessage,
  fetchConversation,
} from '../util/user_api_util';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){

    case GET_CONVERSATION:
      const fetchConversationSuccess = conversation => {
        dispatch(receiveConversation(conversation));
      }
      fetchConversation(action.user_id, action.participant_id, fetchConversationSuccess);
      return next(action);

    case SEND_MESSAGE:
      const postMessageSuccess = message => {
        dispatch(receiveMessage(message[Object.keys(message)[0]]));
      }
      postMessage(action.message, postMessageSuccess);
      return next(action);

    case CREATE_LIKE:
      const postLikeSuccess = like => {
        // dispatch(receiveNewsfeedLike(like));
        dispatch(receiveLike(like));
      }
      postLike(action.liker_id, action.likeable_id, action.likeable_type, postLikeSuccess);
      return next(action);

    case GET_USER:
      const fetchUserSuccess = user => {
        dispatch(receiveUser(user));
      };
      fetchUser(action.id, fetchUserSuccess);
      return next(action);

    case ACCEPT_REQUEST:
      const acceptFriendSuccess = request => {
        dispatch(receiveFriend(request[Object.keys(request)[0]].requester));
        dispatch(removeRequest(request));
        dispatch(receiveConversation(request.conversation));
      };
      acceptFriend(action.userId, action.friendId, acceptFriendSuccess);
      return next(action);

    case REQUEST_FRIEND:
      const postFriendRequestSuccess = request => {
        dispatch(receiveMadeRequest(request));
      };
      postFriendRequest(action.user_id, action.friend_id, postFriendRequestSuccess);
      return next(action);

    default:
      return next(action);
  }
};
