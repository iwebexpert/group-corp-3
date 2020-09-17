import {chatReducer, ChatsReducerState} from "./chats";
import {combineReducers} from "redux";
import {connectRouter, RouterState} from "connected-react-router";
import {History} from "history";

export type AppState = {
    chats: ChatsReducerState;
    router: RouterState;
}

export const rootReducer = (history: History) => combineReducers<AppState>({
    chats: chatReducer,
    router: connectRouter(history)
});
