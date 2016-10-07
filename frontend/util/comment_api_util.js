import { getComment, getComments, createComment } from '../actions/comment_actions';

export const fetchComment = (id, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/comments/${id}`,
		success,
    error: () => console.log('error fetching comment')
	});
};

export const fetchComments = (success) => {
	$.ajax({
		method: 'GET',
		url: `/api/comments`,
		success,
    error: () => console.log('error fetching all comments')
	});
};

export const storeComment = (comment, success) => {
	$.ajax({
		method: 'POST',
		url: `/api/comments`,
    data: comment,
		success,
    error: () => console.log('error creating comment')
	});
};
