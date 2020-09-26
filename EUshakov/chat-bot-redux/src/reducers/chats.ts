import { Reducer } from "redux";
import { ChatActionTypes, ChatsActions } from "../actions/chats";
import { chatsData } from "../helpers/chatsData";
import { ChatState } from "../models/types";

export type ChatsReducerState = {
    loading: boolean,
    entries: ChatState[]
}

const initialState = {
    loading: true,
    entries: []
};

const nextId = (messages: { id: number }[]) => {
    return messages.reduce((prev, current) => prev > current.id ? prev : current.id, 0);
}

export const chatsReducer: Reducer<ChatsReducerState, ChatsActions> = (state = initialState, action) => {
    switch (action.type) {
        case ChatActionTypes.CHATS_LOAD: {
            return {
                ...state,
                loading: false,
                entries: chatsData()
            };
        }
        case ChatActionTypes.CHATS_MESSAGE_SEND: {
            const { text, author, timeStamp, chatId } = action.payload;
            const chatIdx = state.entries.findIndex(chat => chat.id === chatId);
            if (chatIdx < 0) {
                return state;
            }
            const chat = state.entries[chatIdx];
            const modifiedChat: ChatState = {
                ...chat,
                messages: [...chat.messages,
                { id: nextId(chat.messages), text: text, author: author, timeStamp }]
            };
            let entries = [...state.entries];
            entries.splice(chatIdx, 1, modifiedChat);
            return {
                ...state,
                entries: entries
            };
        }
        case ChatActionTypes.CHATS_CHAT_ADDED: {
            return {
                ...state,
                entries: [...state.entries, {
                    id: nextId(state.entries),
                    title: action.payload.title,
                    messages: []
                }]
            };
        }
        default:
            return state;
    }
}