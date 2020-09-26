import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './reducers';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));