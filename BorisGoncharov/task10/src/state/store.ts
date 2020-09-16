import { connectRouter, routerMiddleware, RouterState } from "connected-react-router";
import { createBrowserHistory, History } from "history";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { botResponseMiddleware, chatHighlightMiddleware, loadDataMiddleware } from "./middlewares";
import { chatsReducer, ChatsReducerState, messagesReducer, MessagesReducerState, settingsReducer, SettingsReducerState } from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

export type AppState = {
  router: RouterState,
  chats: ChatsReducerState;
  messages: MessagesReducerState;
  settings: SettingsReducerState;
};

export const history = createBrowserHistory();

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['chats', 'messages', 'settings']
};

const createRootReducer = (history: History) => combineReducers<AppState>({
  router: connectRouter(history),
  chats: chatsReducer,
  messages: messagesReducer,
  settings: settingsReducer,
});


export const initStore = () => {
  const store: Store = createStore(
    persistReducer(persistConfig, createRootReducer(history)), // root reducer with router state
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
        botResponseMiddleware,
        loadDataMiddleware,
        chatHighlightMiddleware
      )
    ),
  );

  // Save store  for the first time
  const persistor = persistStore(store);
  return { store, persistor };
}