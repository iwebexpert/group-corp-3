import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { botResponseMiddleware, loadDataMiddleware } from "./middlewares";
import { chatsReducer, ChatsReducerState, messagesReducer, MessagesReducerState, settingsReducer, SettingsReducerState } from "./reducers";

export type AppState = {
  chats: ChatsReducerState;
  messages: MessagesReducerState;
  settings: SettingsReducerState;
};

export const rootReducer = combineReducers<AppState>({
  chats: chatsReducer,
  messages: messagesReducer,
  settings: settingsReducer,
});

export const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(botResponseMiddleware, loadDataMiddleware)));