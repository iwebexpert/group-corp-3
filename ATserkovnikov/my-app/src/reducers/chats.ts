import {Reducer} from "redux";
import {ChatActionTypes, ChatsActions, chatsLoadDB} from "../actions/chats";
import {ChatsDB} from "../helpers/ChatsDB";

export type ChatsReducerState = {
    loading: boolean;
    entries: Chat[];
    errors: boolean;
}

const initialChatsReducerState: ChatsReducerState = {
    loading: false,
    entries: [],
    errors: false
};

export const chatReducer: Reducer<ChatsReducerState, ChatsActions>
    = (state = initialChatsReducerState, action) => {
    switch (action.type) {
        case ChatActionTypes.CHAT_ADD:
            const newChat: Chat = {
                id: action.payload.id,
                title: action.payload.name,
                description: action.payload.name,
                messages: [],
                unreadMessageCount: 0
            };

            return Object.assign({}, state, {entries: state.entries.concat(newChat)});

        case ChatActionTypes.MESSAGE_ADD:
            const newChatDB = state.entries.map(item => {
                if (item.id === +action.payload.chatId){
                    item.messages = action.payload.messages;
                    item.unreadMessageCount = action.payload.unreadMessageCount;
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

        case ChatActionTypes.CHATS_LOAD_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                errors: false
            });

        case ChatActionTypes.CHATS_LOAD_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                errors: false,
                entries: action.payload
            });

        case ChatActionTypes.CHATS_LOAD_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: true
            });

        case ChatActionTypes.REMOVE_CHAT:
            const newChats = state.entries.filter(c => c.id !== action.payload);

            return Object.assign({}, state, {entries: newChats});

        default:
            return state;
    }
};
