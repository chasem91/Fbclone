// import {
//   receivePosts,
//   receivePostOnTimeline
// } from '../actions/timeline_actions';
//
// import {
//   receiveNewsfeedPost
// } from '../actions/user_actions';
//
// export const fetchPosts = (user_id, success) => {
// 	$.ajax({
// 		method: 'GET',
// 		url: `/api/posts`,
//     data: { user_id },
// 		success,
//     error: () => console.log('error fetching posts')
// 	});
// };
//
// export const postPost = (post, user_id, dispatch) => {
//   $.ajax({
//       method: 'POST',
//       url: `/api/posts`,
//       data: { post },
//       success: post => {
//         dispatch(receiveNewsfeedPost(post));
//         dispatch(receivePostOnTimeline(post, user_id));
//       },
//       error: () => console.log('error posting post')
//   });
// };
