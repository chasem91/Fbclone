import { getProfile } from '../actions/profile_actions';

export const fetchProfile = (username, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/profiles/${username}`,
		success
	});
};
