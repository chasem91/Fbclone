import { getPost, getPosts, createPost } from '../actions/post_actions';

export const fetchPost = (id, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/posts/${id}`,
		success,
    error: () => console.log('error fetching post')
	});
};

export const fetchPosts = (success) => {
	$.ajax({
		method: 'GET',
		url: `/api/posts`,
		success,
    error: () => console.log('error fetching all posts')
	});
};

export const storePost = (post, success) => {
	$.ajax({
		method: 'POST',
		url: `/api/posts`,
    data: post,
		success,
    error: () => console.log('error creating post')
	});
};
