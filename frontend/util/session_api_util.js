import { receiveCurrentUser, receiveErrors, setProfilePictureID, receivePhotoURL } from '../actions/session_actions'
import { hashHistory } from 'react-router'

export const postPhoto = (photo, success) => {
	$.ajax({
		method: 'POST',
		url: `/api/photos`,
		data: photo,
		contentType: false,
		processData: false,
		success,
		error: xhr => console.log(xhr.responseJSON)
	})
}

export const updateCurrentUser = (user, userId, success) => {
	$.ajax({
		method: 'PATCH',
		url: `/api/users/${userId}`,
		data: { user },
		success,
		error: xhr => console.log(xhr.responseJSON)
	})
}

export const login = (user, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: { user },
		success,
		error
	})
}

export const signup = (user, success, error) => {
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: user,
		success,
		error
	})
}

export const logout = success => {
	$.ajax({
		method: 'DELETE',
		url: '/api/session',
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout")
		}
	})
}
