import {
  receiveUser,
  receiveMadeRequest,
  receiveLike,
  receivePost
} from '../actions/user_actions';

import {
  receiveUsers
} from '../actions/session_actions';

export const fetchUsers = (search, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/users`,
    data: { search },
		success,
    error: () => console.log('error fetching users')
	});
};

export const postPost = (post, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: { post },
    success,
    error: () => console.log('error posting post')
  });
};

export const postComment = (comment, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: { comment },
    success,
    error: () => console.log('error posting comment')
  });
};

export const fetchConversation = (user_id, participant_id, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/conversations',
    data: { user_id, participant_id },
    success,
    error: () => console.log('error fetching conversation')
  });
};

export const postMessage = (message, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: { message },
    success,
    error: () => console.log('error posting message')
  });
};

export const fetchUser = (id, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/users/${id}`,
		success,
    error: () => console.log('error fetching user')
	});
};

export const acceptFriend = (userId, friendId, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/friendships`,
    data: {
      user_id: userId,
      friend_id: friendId
    },
    success,
    error: () => console.log('error accepting friend')
  });
};

export const postFriendRequest = (user_id, friend_id, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/friend_requests`,
    data: { user_id, friend_id },
    success,
    error: () => console.log('error requesting friend')
  });
};

export const postLike = (liker_id, likeable_id, likeable_type, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/likes`,
    data: { like: { liker_id, likeable_id, likeable_type } },
    success,
    error: () => console.log('error posting like')
  });
};
