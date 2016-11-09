import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import UserMiddleware from '../middleware/user_middleware';

const RootMiddleware = applyMiddleware(
  UserMiddleware,
  SessionMiddleware
);

export default RootMiddleware;
