import { getPhoto, getPhotos } from '../actions/photo_actions';

export const fetchPhoto = (id, success) => {
	$.ajax({
		method: 'GET',
		url: `/api/photos/${id}`,
		success,
    error: () => console.log('error fetching photo')
	});
};

export const fetchPhotos = (success) => {
	$.ajax({
		method: 'GET',
		url: `/api/photos`,
		success,
    error: () => console.log('error fetching all photos')
	});
};
