import {combineReducers} from 'redux';

import {chatsReducer, ChatsReducerState} from './chats';
import { connectRouter, RouterState } from 'connected-react-router'; 
import { History } from 'history';

export type AppState = {
    chatsState: ChatsReducerState;
    router: RouterState
};

export const initRootReducer = (history: History) => combineReducers<AppState>({
    chatsState: chatsReducer,
    router: connectRouter(history)
});
