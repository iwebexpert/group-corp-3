import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import {routerMiddleware} from 'connected-react-router';
import {applyMiddleware, createStore, Store} from 'redux';
import {initReducer} from './store/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {highlightChatMiddleware} from './middleware/highlightChat';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'app',
    storage,
    blacklist: ['chats'],
};

export const initStore = () => {
    const initialStore = {};

    const store: Store = createStore(persistReducer(persistConfig, initReducer(history)), composeWithDevTools(
        applyMiddleware(highlightChatMiddleware, thunk, logger, routerMiddleware(history)),
    ));

    const persistor = persistStore(store);
    return {store, persistor};
};
