import { Reducer } from 'redux';

import { ChatsActions, ChatsActionTypes } from '../actions/chats';
import { chatsService } from '../logic/domain/ChatsService';
import { Chat, AnswerStatus, Message } from '../logic/domain/ChatsService';

export type ChatsReducerState = {
    loading: boolean;
    chats: Array<Chat>;
};

const initialState: ChatsReducerState = {
    loading: true,
    chats: [],
};


const list = chatsService.getChatsList();

const clone = (chats: Chat[]) => 
    chats.map(ch => ({...ch, messages: [...ch.messages], unreadMessages: [...ch.unreadMessages]}));

export const chatsReducer: Reducer<ChatsReducerState, ChatsActions> = (state = initialState, action) => {
    switch (action.type) {
        case ChatsActionTypes.CHATS_LOAD:
            return {
                ...state,
                loading: false,
                chats: clone(list),
            };
        case ChatsActionTypes.CHATS_MESSAGE_SEND: {
            const chats = clone(state.chats);
            const iChat = state.chats.findIndex(chat => chat.id === action.payload.message.chatId);
            const message = {
                ...action.payload.message,
                id: Math.max(...chats[iChat].messages.map(m => m.id)) + 1
            }
            chats[iChat].messages.push(message);
            return {
                ...state,
                chats
            }
        }
        case ChatsActionTypes.CHATS_ADD:
            return {
                ...state,
                chats: [...clone(state.chats), action.payload.chat]
            }
        case ChatsActionTypes.CHATS_MESSAGE_ARRIVED: {
            const chats = clone(state.chats);
            const iChat = state.chats.findIndex(chat => chat.id === action.payload.message.chatId);
            chats[iChat].unreadMessages.push({...action.payload.message});
            return {
                ...state,
                chats
            }
        }
        case ChatsActionTypes.CHATS_READED: {
            const chats = clone(state.chats);
            const iChat = state.chats.findIndex(chat => chat.id === action.payload.chatId);
            chats[iChat].unreadMessages = [];
            return {
                ...state,
                chats
            }
        }
        case ChatsActionTypes.CHATS_REMOVE: {
            let chats = clone(state.chats);
            const iChat = state.chats.findIndex(chat => chat.id === action.payload.chatId);
            chats = chats.splice(iChat, 1);
            return {
                ...state,
                chats
            }
        }
        default:
            return state;
    }
}