import { rootReducer } from './reducers/index';
import { Store, applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
