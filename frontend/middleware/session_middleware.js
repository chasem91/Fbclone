import { receiveCurrentUser,
         receiveUpdatedCurrentUser,
         receiveConversations,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP,
         SET_PROFILE_PICTURE,
         SET_BANNER_PICTURE,
         SET_PROFILE_PICTURE_ID,
         setProfilePictureID,
         receiveProfilePicture,
         CREATE_PHOTO,
         receivePhotoURL,
         setBannerPictureID,
         SET_BANNER_PICTURE_ID
       } from '../actions/session_actions'

import { login, signup, logout, postPhoto, updateCurrentUser } from '../util/session_api_util'

import { hashHistory } from 'react-router'

export default ({getState, dispatch}) => next => action => {

  let successCallback = user => {
    dispatch(receiveCurrentUser(user))
  }

  let errorCallback = xhr => {
    const errors = xhr.responseJSON
    dispatch(receiveErrors(errors))
  }

  switch(action.type){

    case CREATE_PHOTO:
      successCallback = url => {
        dispatch(receivePhotoURL(url))
      }
      postPhoto(action.photo, successCallback)
      return next(action)

    case SET_PROFILE_PICTURE_ID:
      successCallback = user => {
        dispatch(receiveUpdatedCurrentUser(user))
      }
      updateCurrentUser({ profile_picture_id: action.id }, action.userId, successCallback)
      return next(action)

    case SET_BANNER_PICTURE_ID:
      successCallback = user => {
        dispatch(receiveUpdatedCurrentUser(user))
      }
      updateCurrentUser({ banner_picture_id: action.id }, action.userId, successCallback)
      return next(action)

    case SET_PROFILE_PICTURE:
      successCallback = photo => {
        dispatch(setProfilePictureID(photo.id, photo.userId))
      }
      postPhoto(action.photo, successCallback)
      return next(action)

    case SET_BANNER_PICTURE:
      successCallback = photo => {
        dispatch(setBannerPictureID(photo.id, photo.userId))
      }
      postPhoto(action.photo, successCallback)
      return next(action)

    case LOGIN:
      login(action.user, successCallback, errorCallback)
      return next(action)

    case LOGOUT:
      logout(() => {
        next(action)
        hashHistory.push('/login')
      })
      break

    case SIGNUP:
      signup(action.user, successCallback, errorCallback)
      return next(action)

    default:
      return next(action)

  }
}
