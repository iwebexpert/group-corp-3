import { ChatsActionTypes } from './../actions/chats';
import { Reducer } from "redux";

export type ChatsReducerState = {
    loading: boolean;
    error: boolean;
    items: Chat[];
};

const initialState: ChatsReducerState = {
    loading: false,
    error: false,
    items: []
};

export const chatsReducer: Reducer<ChatsReducerState> = (state = initialState, action) => {
    switch (action.type) {
        case ChatsActionTypes.CHATS_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case ChatsActionTypes.CHATS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                items: action.payload,
            };
        case ChatsActionTypes.CHATS_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case ChatsActionTypes.CHATS_NEW_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case ChatsActionTypes.CHATS_NEW_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                items: [...state.items, action.payload]
            };
        case ChatsActionTypes.CHATS_NEW_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
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
        case ChatsActionTypes.CHATS_DELETE_SUCCESS:
            const { id } = action.payload;
            
            return {
                ...state,
                loading: false,
                items: [...state.items.filter((chat: Chat) => chat.id !== id)]
            };
        case ChatsActionTypes.CHATS_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case ChatsActionTypes.CHATS_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
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
        case ChatsActionTypes.CHATS_MESSAGE_SEND_FAILURE:
            return {
                ...state,
                error: true,
            };
        case ChatsActionTypes.CHATS_MESSAGE_SEND_REQUEST:
            return {
                ...state,
                error: false,
            };
        case ChatsActionTypes.CHATS_MESSAGE_SEND_SUCCESS:
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
