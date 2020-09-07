import { combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { chatsReducer, ChatsReducerState } from "./chats/chatsReducer";
import { messagesReducer, MessagesReducerState } from "./messages/messagesReducer";
import { settingsReducer, SettingsReducerState } from "./settings/settingsReducer";

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