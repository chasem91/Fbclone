import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import ProfileMiddleware from '../middleware/profile_middleware';

const RootMiddleware = applyMiddleware(
  ProfileMiddleware,
  SessionMiddleware
);

export default RootMiddleware;
