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
            const newChat: Chat = {
                id: action.payload.id,
                title: action.payload.name,
                description: action.payload.name,
                messages: {
                    messages: [],
                    authors: [],
                    chatId: action.payload.id,
                    unreadMessageCount: 0
                }
            };

            return Object.assign({}, state, {entries: state.entries.concat(newChat)});

        case ChatActionTypes.MESSAGE_ADD:
            const newChatDB = state.entries.map(item => {
                if (item.id === action.payload.chatId){
                    item.messages = action.payload;
                }
                return item;
            });

            return Object.assign({}, state, {entries: newChatDB});

        case ChatActionTypes.CHATS_LOAD:
            if (state.entries.length === 0) {
                return  {
                    ...state,
                    entries: ChatsDB
                };
            }
            return state;

        case ChatActionTypes.REMOVE_CHAT:
            const newChats = state.entries.filter(c => c.id !== action.payload);

            return Object.assign({}, state, {entries: newChats});

        default:
            return state;
    }
};
