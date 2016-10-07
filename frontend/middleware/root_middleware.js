import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import ProfileMiddleware from '../middleware/profile_middleware';
import PhotoMiddleware from '../middleware/photo_middleware';

const RootMiddleware = applyMiddleware(
  ProfileMiddleware,
  SessionMiddleware,
  PhotoMiddleware
);

export default RootMiddleware;
