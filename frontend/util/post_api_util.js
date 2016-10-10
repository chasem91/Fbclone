import { receiveComments, receiveComment } from '../actions/post_actions';

export const fetchComments = (post_id, dispatch) => {
	$.ajax({
		method: 'GET',
		url: `/api/comments`,
		data: { post_id },
		success: comments => {
      dispatch(receiveComments(comments, post_id));
    },
    error: () => console.log('error fetching comments')
	});
};

export const postComment = (comment, post_id, dispatch) => {
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: comment,
    success: comment => {
      dispatch(receiveComment(comment, post_id));
    },
    error: () => console.log('error posting comment')
  });
};
