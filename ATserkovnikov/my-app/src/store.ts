import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from "./reducers";
import logger from 'redux-logger';

export const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
