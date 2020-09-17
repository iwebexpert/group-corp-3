import {Reducer} from 'redux';

import { ChatsActions, ChatsActionTypes } from '../actions/chats';
import { chatsService } from '../logic/domain/ChatsService';
import { ChatData, AnswerStatus } from '../logic/domain/ChatData';

export type ChatsReducerState = {
    loading: boolean;
    chats: ChatData[];
};

const initialState: ChatsReducerState = {
    loading: true,
    chats: [],
};


const list = chatsService.getChatsList();


export const chatsReducer: Reducer<ChatsReducerState, ChatsActions> = (state = initialState, action) => {
    switch(action.type){
        case ChatsActionTypes.CHATS_LOAD:
            return {
                ...state,
                loading: false,
                chats: list.map(l => ({...l, answerStatus: AnswerStatus.None})),
            };
        case ChatsActionTypes.CHATS_MESSAGE_SEND:
            const iChat = state.chats.findIndex(chat => chat.id === action.payload.message.chatId);
            const chats = [...state.chats];
            chats[iChat].messages = [...chats[iChat].messages, action.payload.message];
            return {
                ...state,
                chats
            }
        case ChatsActionTypes.CHATS_ADD:
            return {
                ...state,
                chats: [...state.chats, action.payload.chat]
            }
        default:
            return state;
    }
}