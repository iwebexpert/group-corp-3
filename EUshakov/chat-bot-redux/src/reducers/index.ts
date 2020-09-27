import { combineReducers } from 'redux';
import { authReducer, AuthReducerState } from './auth';
import { chatsReducer, ChatsReducerState } from './chats';

export type AppState = {
    chats: ChatsReducerState,
    auth: AuthReducerState
};

export const rootReducer = combineReducers<AppState>({
    chats: chatsReducer,
    auth: authReducer
});