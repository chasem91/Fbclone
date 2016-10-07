import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import ProfileMiddleware from '../middleware/profile_middleware';
import PhotoMiddleware from '../middleware/photo_middleware';
import CommentMiddleware from '../middleware/comment_middleware';
import PostMiddleware from '../middleware/post_middleware';

const RootMiddleware = applyMiddleware(
  ProfileMiddleware,
  SessionMiddleware,
  PhotoMiddleware,
  CommentMiddleware,
  PostMiddleware
);

export default RootMiddleware;
