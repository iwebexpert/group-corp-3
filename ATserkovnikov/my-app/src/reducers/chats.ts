import {Reducer} from "redux";
import {ChatActionTypes, ChatsActions} from "../actions/chats";
import {ChatsDB} from "../helpers/ChatsDB";

export type ChatsReducerState = {
    loading: boolean;
    entries: Chat[];
}

const initialChatsReducerState: ChatsReducerState = {
    loading: false,
    entries: []
};

export const chatReducer: Reducer<ChatsReducerState, ChatsActions>
    = (state = initialChatsReducerState, action) => {
    switch (action.type) {
        case ChatActionTypes.CHAT_ADD:
            const newId = state.entries.length++;
            const newChat: Chat = {
                id: newId,
                title: action.payload,
                description: action.payload,
                messages: {
                    messages: [],
                    authors: [],
                    chatId: newId
                }
            };

            return {
                ...state,
                entries: state.entries.concat(newChat)
            };

        case ChatActionTypes.MESSAGE_ADD:
            const newChatDB = state.entries.map(item => {
                if (item.id === action.payload.chatId){
                    item.messages = action.payload;
                }
                return item;
            });

            return {
                ...state,
                entries: newChatDB
            };

        case ChatActionTypes.CHATS_LOAD:
            return  {
                ...state,
                entries: ChatsDB
            };
        default:
            return state;
    }
};
