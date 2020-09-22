import { connectRouter, routerMiddleware, RouterState } from "connected-react-router";
import { createBrowserHistory, History } from "history";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { messagesMiddleware, routeMiddleware } from "./middlewares";
import { chatsReducer, ChatsReducerState, messagesReducer, MessagesReducerState, settingsReducer, SettingsReducerState } from "./reducers";
import thunk from 'redux-thunk';

export const baseUrl = 'http://localhost:4000/api';

export type AppState = {
  router: RouterState,
  chats: ChatsReducerState;
  messages: MessagesReducerState;
  settings: SettingsReducerState;
};

export const history = createBrowserHistory();

const createRootReducer = (history: History) => combineReducers<AppState>({
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
      thunk.withExtraArgument<ThunkExtraArgs>({ baseUrl }),
      // ... other middlewares ...
      messagesMiddleware,
      routeMiddleware,
    )
  ),
);
