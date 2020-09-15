import { SettingsReducerState, settingsReducer } from './settings';
import { usersReducer, UsersReducerState } from './users';
import { ChatsReducerState, chatsReducer } from "./chats";
import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import {History} from 'history';

export type AppState = {
    chats: ChatsReducerState;
    users: UsersReducerState;
    appSettings: SettingsReducerState;
};

export const initReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
    users: usersReducer,
    appSettings: settingsReducer
});
