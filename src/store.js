import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './Reducers';

const initialState = {}

const middlewares = [thunk];

// apply the middleware
let middleware = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  initialState,
  middleware
)

export default store;