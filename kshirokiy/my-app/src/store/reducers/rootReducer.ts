import {combineReducers} from 'redux';
import {chatsReducer, ChatsReducerState} from './chats';

export type AppState = {
    chats: ChatsReducerState;
};

export default combineReducers<AppState>({
    chats: chatsReducer
})
