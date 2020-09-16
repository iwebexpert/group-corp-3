import {combineReducers} from 'redux';

import {chatsReducer, ChatsReducerState} from './chats';

export type AppState = {
    chatsState: ChatsReducerState;
};

export const rootReducer = combineReducers<AppState>({
    chatsState: chatsReducer,
});