import {
  RECEIVE_USER
} from '../actions/user_actions'

import {
  RECEIVE_LIKE,
  RECEIVE_COMMENT,
  RECEIVE_POST
} from '../actions/session_actions'

import merge from 'lodash/merge'

const _initialState = Object.freeze(
  {
    id: "",
    first_name: "",
    last_name: "",
    birthday: "",
    gender: "",
    timelinePosts: {},
    friends: {}
  }
)

const UserReducer = (state = _initialState, action) => {
  let newState = merge({}, state)
  switch(action.type) {

    case RECEIVE_POST:
      const newPost = action.post[ Object.keys(action.post)[0] ]
      newState.timelinePosts[ newPost.id ] = newPost
      return newState

    case RECEIVE_COMMENT:
      const comment = action.comment[ Object.keys(action.comment)[0] ]
      const post = newState.timelinePosts[ comment.post_id ]
      if (post) {
        newState.timelinePosts[ comment.post_id ].comments[comment.id] = comment
        return newState
      } else {
        return state
      }

    case RECEIVE_USER:
      newState = merge({}, state, action.user)
      newState.timelinePosts = action.user.timelinePosts || {}
      newState.friends = action.user.friends || {}
      newState.photos = action.user.photos || {}
      return newState

    case RECEIVE_LIKE:
      const like = action.like[ Object.keys(action.like)[0] ]
      if (like.likeable.type === "Post") {
        const post = newState.timelinePosts[ like.likeable.id ]
        if (post) {
          newState.timelinePosts[ like.likeable.id ].likes[like.id] = like
        }
        return newState
      } else {
        return state
      }

    default:
      return state
  }
}

export default UserReducer
