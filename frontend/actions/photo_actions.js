export const GET_PHOTO = "GET_PHOTO";
export const GET_PHOTOS = "GET_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

export const getPhoto = id => ({
  type: GET_PHOTO,
  id
});

export const getPhotos = () => ({
  type: GET_PHOTOS,
});

export const receivePhoto = currentPhoto => ({
  type: RECEIVE_PHOTO,
  currentPhoto
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});
