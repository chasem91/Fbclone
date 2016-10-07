import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import PhotoReducer from './photo_reducer';
import CommentReducer from './comment_reducer';
import PostReducer from './post_reducer';

export default combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
  photo: PhotoReducer,
  comment: CommentReducer,
  post: PostReducer
});
