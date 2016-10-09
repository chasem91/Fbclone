import { receiveComments } from '../actions/post_actions';

export const fetchComments = (post_id, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/comments`,
		data: { post_id },
		success,
    error: () => console.log('error fetching comments')
	});
};
