import { combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { chatsReducer, ChatsReducerState } from "./reducers/chats";
import { messagesReducer, MessagesReducerState } from "./reducers/messages";
import { settingsReducer, SettingsReducerState } from "./reducers/settings";

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

export const store: Store = createStore(rootReducer, composeWithDevTools());