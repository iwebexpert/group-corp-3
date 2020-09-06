import { usersReducer, UsersReducerState } from './users';
import { ChatsReducerState, chatsReducer } from "./chats";
import { combineReducers } from "redux";

export type AppState = {
    chats: ChatsReducerState;
    users: UsersReducerState;
}

export const rootReducer = combineReducers<AppState>({
    chats: chatsReducer,
    users: usersReducer
});
