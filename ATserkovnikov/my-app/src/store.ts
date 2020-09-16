import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from "./reducers";
import logger from 'redux-logger';
import {AddChatMiddleware, ReadMiddleware, BotAnswerMiddleware, ChangeChatMiddleware} from "./middlewears";
import {routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const history = createBrowserHistory();

const persistConfig = {
    key: "TsApp",
    storage
};

export const initStore = () => {
    const store: Store = createStore(persistReducer(persistConfig, rootReducer(history)), composeWithDevTools(
        applyMiddleware(logger,
            ReadMiddleware,
            routerMiddleware(history),
            AddChatMiddleware,
            BotAnswerMiddleware,
            ChangeChatMiddleware)
    ));

    const persistor = persistStore(store);

    return {store, persistor};
};

