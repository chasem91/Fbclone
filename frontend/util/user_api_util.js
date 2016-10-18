import {
  receiveUser,
  receiveUsers,
  receiveFriendRequests,
  receiveRequestedFriends,
  receiveNewsfeedLike,
  receiveLikeOnTimeline
} from '../actions/user_actions';

export const fetchUser = (id, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/users/${id}`,
		success,
    error: () => console.log('error fetching user')
	});
};

export const fetchUsers = (search, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/users`,
    data: { search },
		success,
    error: () => console.log('error fetching users')
	});
};

export const fetchFriendRequests = (user_id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/friend_requests`,
    data: { user_id },
    success,
    error: () => console.log('error fetching friend requests')
  });
};

export const acceptFriend = (user_id, friend_id, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/friendships`,
    data: { user_id, friend_id },
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

// export const fetchRequestedFriends = (user_id, success) => {
//   $.ajax({
//     method: 'GET',
//     url: `/api/friend_requests`,
//     data: { user_id },
//     success,
//     error: () => console.log('error fetching requested friends')
//   });
// };
