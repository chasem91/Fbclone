import { receivePosts } from '../actions/timeline_actions';

export const fetchPosts = (user_id, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/posts`,
    data: { user_id },
		success,
    error: () => console.log('error fetching posts')
	});
};
