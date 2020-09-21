import {createStore, applyMiddleware, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from "history";
import { persistReducer, persistStore }  from 'redux-persist'
import { initRootReducer } from './reducers';
import { routerMiddleware } from 'connected-react-router';
import { botMiddleware } from './middlewares/botMiddleware';
import { readChatMiddleware } from './middlewares/readChatMiddleware';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'ak-app',
    storage
}

export const initStore = () => {
    const store: Store = createStore(
      persistReducer(persistConfig, initRootReducer(history)), 
      composeWithDevTools(
        applyMiddleware(
            logger,
            routerMiddleware(history),
            botMiddleware,
            readChatMiddleware,
        )
      ),
    );
  
    const persistor = persistStore(store);
    return { store, persistor };
}