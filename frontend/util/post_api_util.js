import { receiveComments } from '../actions/post_actions';

export const fetchComments = (success) => {
	$.ajax({
		method: 'GET',
		url: `/api/comments`,
		success,
    error: () => console.log('error fetching comments')
	});
};
