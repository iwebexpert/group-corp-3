import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { rootReducer } from './reducers';

export const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));