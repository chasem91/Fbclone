import { getProfile, getProfiles } from '../actions/profile_actions';

export const fetchProfile = (id, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/users/${id}`,
		success,
    error: () => console.log('error fetching profile')
	});
};

export const fetchProfiles = (success) => {
	$.ajax({
		method: 'GET',
		url: `/api/users`,
		success,
    error: () => console.log('error fetching all profiles')
	});
};
