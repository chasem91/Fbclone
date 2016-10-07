import { RECEIVE_PHOTO, RECEIVE_PHOTOS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const _initialState = Object.freeze(
  {
  }
);

const PhotoReducer = (state = _initialState, action) => {
  switch(action.type) {
    case RECEIVE_PHOTO:
      return merge({}, state, {
        currentPhoto: action.currentPhoto
      });
    case RECEIVE_PHOTOS:
      return merge({}, state, {
        photos: action.photos
      });
    default:
      return state;
  }
};

export default PhotoReducer;
