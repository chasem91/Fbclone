import {  GET_PHOTO, GET_PHOTOS, receivePhoto, receivePhotos } from '../actions/photo_actions';
import { fetchPhoto, fetchPhotos } from '../util/photo_api_util';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GET_PHOTO:
      const fetchPhotoSuccess = photo => {
        dispatch(receivePhoto(photo));
      };
      fetchPhoto(action.id, fetchPhotoSuccess);
      return next(action);
    case GET_PHOTOS:
      const fetchPhotosSuccess = photos => {
        dispatch(receivePhotos(photos));
      };
      fetchPhotos(fetchPhotosSuccess);
      return next(action);
    default:
      return next(action);
  }
};
