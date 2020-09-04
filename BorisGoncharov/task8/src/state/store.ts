import { combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { chatsReducer, ChatsReducerState } from "./chats/chatsReducer";
import { messagesReducer, MessagesReducerState } from "./messages/messagesReducer";

export type AppState = {
    chats: ChatsReducerState;
    messages: MessagesReducerState;
};

export const rootReducer = combineReducers<AppState>({
    chats: chatsReducer,
    messages: messagesReducer,
});

export const store: Store = createStore(rootReducer, composeWithDevTools());