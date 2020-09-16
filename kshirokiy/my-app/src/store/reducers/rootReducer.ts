import {combineReducers} from 'redux';
import {chatsReducer, ChatsReducerState} from './chats';
import {History} from 'history';
import {connectRouter} from 'connected-react-router';

export type AppState = {
    chats: ChatsReducerState;
};

export default combineReducers<AppState>({
    chats: chatsReducer
})

export const initReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    chats: chatsReducer
});
