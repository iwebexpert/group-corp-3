import { type } from 'os';
import { combineReducers } from 'redux';
import { chatsReducer, ChatsReducerState } from './chats';

export type AppState = {
    chats: ChatsReducerState
};

export const rootReducer = combineReducers<AppState>({
    chats: chatsReducer
});