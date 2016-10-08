import { receiveUser, receiveUsers } from '../actions/user_actions';

export const fetchUser = (id, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/users/${id}`,
		success,
    error: () => console.log('error fetching user')
	});
};

export const fetchUsers = (success) => {
	$.ajax({
		method: 'GET',
		url: `/api/users`,
		success,
    error: () => console.log('error fetching users')
	});
};
