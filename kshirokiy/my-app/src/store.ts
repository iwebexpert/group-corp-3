import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import {routerMiddleware} from 'connected-react-router';
import {applyMiddleware, createStore, Store} from 'redux';
import {initReducer} from './store/reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {highlightChatMiddleware} from './middleware/highlightChat';
import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();

const persistConfig = {
    key: 'app',
    storage,
};

export const initStore = () => {
    const initialStore = {};

    const store: Store = createStore(persistReducer(persistConfig, initReducer(history)), composeWithDevTools(
        applyMiddleware(highlightChatMiddleware, routerMiddleware(history)),
    ));

    const persistor = persistStore(store);
    return {store, persistor};
};
