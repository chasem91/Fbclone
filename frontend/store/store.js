import { createStore, compose } from 'redux'
import RootReducer from '../reducers/root_reducer'
import RootMiddleware from '../middleware/root_middleware'


const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify here name, actionsBlacklist, actionsCreators and other options
    }) : compose
const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(RootMiddleware)
  )
)

export default configureStore
