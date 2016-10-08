import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import UserMiddleware from '../middleware/user_middleware';
import TimelineMiddleware from '../middleware/timeline_middleware';
import PostMiddleware from '../middleware/post_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware,
  TimelineMiddleware,
  PostMiddleware
);

export default RootMiddleware;
