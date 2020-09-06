import {chatReducer, ChatsReducerState} from "./chats";
import {combineReducers} from "redux";

export type AppState = {
    chats: ChatsReducerState;
}

export const rootReducer= combineReducers<AppState>({
    chats: chatReducer
});
