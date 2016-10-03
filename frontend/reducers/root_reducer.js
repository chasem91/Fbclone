import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';

export default combineReducers({
  session: SessionReducer,
  profile: ProfileReducer
});
