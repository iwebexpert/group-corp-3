import { SettingsReducerState, settingsReducer } from './settings';
import { usersReducer, UsersReducerState } from './users';
import { ChatsReducerState, chatsReducer } from "./chats";
import { combineReducers } from "redux";

export type AppState = {
    chats: ChatsReducerState;
    users: UsersReducerState;
    appSettings: SettingsReducerState;
};

export const rootReducer = combineReducers<AppState>({
    chats: chatsReducer,
    users: usersReducer,
    appSettings: settingsReducer
});
