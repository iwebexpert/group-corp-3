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
}

export const chatsReducer: Reducer<ChatsReducerState> = (state = initialState, action) => {
    switch (action.type) {
        case ChatsActionTypes.CHATS_LOAD:
            return {
                ...state,
                items: chatsStub
            }
        case ChatsActionTypes.CHATS_NEW:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case ChatsActionTypes.CHATS_MESSAGE_SEND:
            const { chatId, message } = action.payload;
            
            return {
                ...state,
                items: [...state.items.map((item: Chat) => {
                    if (item.id === chatId) {
                        item.messages = [...item.messages, message];
                    }

                    return item;
                })]
            };
        default:
            return state;
    }
}
