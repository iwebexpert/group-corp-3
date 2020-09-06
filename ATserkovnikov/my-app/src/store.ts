import {applyMiddleware, createStore, Store} from "redux";
import {rootReducer} from "./reducers";
import logger from 'redux-logger';

export const store: Store = createStore(rootReducer, applyMiddleware(logger));
