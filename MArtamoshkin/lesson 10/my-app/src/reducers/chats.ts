import { chatsStub } from './../common/stubData';
import { ChatsActionTypes } from './../actions/chats';
import { Reducer } from "redux";

export type ChatsReducerState = {
    loading: boolean;
    items: Chat[];
};

const initialState: ChatsReducerState = {
    loading: false,
    items: chatsStub
};

export const chatsReducer: Reducer<ChatsReducerState> = (state = initialState, action) => {
    switch (action.type) {
        case ChatsActionTypes.CHATS_LOAD:
            return {
                ...state,
                items: chatsStub
            };
        case ChatsActionTypes.CHATS_NEW:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case ChatsActionTypes.CHATS_IS_TYPING:
            const { isTyping } = action.payload;
            return {
                ...state,
                items: [...state.items.map((item: Chat) => {
                    if (item.id === action.payload.chatId) {
                        item.isTyping = isTyping;
                    }

                    return item;
                })]
            };
        case ChatsActionTypes.CHATS_DELETE:
            const { id } = action.payload;
            return {
                ...state,
                items: [...state.items.filter((chat: Chat) => chat.id !== id)]
            };
        case ChatsActionTypes.CHATS_IS_FIRED:
            const { isFired } = action.payload;
            return {
                ...state,
                items: [...state.items.map((item: Chat) => {
                    if (item.id === action.payload.chatId) {
                        item.isFired = isFired;
                    }

                    return item;
                })]
            };
        case ChatsActionTypes.CHATS_MESSAGE_SEND:
            const { chatId, message, isResponse } = action.payload;

            return {
                ...state,
                items: [...state.items.map((item: Chat) => {
                    if (item.id === chatId) {
                        item.messages = [...item.messages, message];
                        item.responseStep = isResponse ? item.responseStep + 1 : item.responseStep;
                    }

                    return item;
                })]
            };
        default:
            return state;
    }
};
