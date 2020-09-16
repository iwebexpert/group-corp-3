import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory, History } from "history";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { botResponseMiddleware, chatHighlightMiddleware, loadDataMiddleware } from "./middlewares";
import { chatsReducer, ChatsReducerState, messagesReducer, MessagesReducerState, settingsReducer, SettingsReducerState } from "./reducers";

export type AppState = {
  chats: ChatsReducerState;
  messages: MessagesReducerState;
  settings: SettingsReducerState;
};

export const history = createBrowserHistory();

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  chats: chatsReducer,
  messages: messagesReducer,
  settings: settingsReducer,
});

export const store: Store = createStore(
  createRootReducer(history), // root reducer with router state
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