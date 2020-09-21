import {Reducer} from "redux";
import {ChatActionTypes, ChatsActions} from "../actions/chats";
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
                messages: []
            };

            return Object.assign({}, state, {entries: state.entries.concat(newChat)});

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

        case ChatActionTypes.CHAT_ADD_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                errors: false
            });

        case ChatActionTypes.CHAT_ADD_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                errors: false,
                entries: state.entries.concat(action.payload)
            });

        case ChatActionTypes.CHAT_ADD_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: true
            });

        case ChatActionTypes.CHAT_REMOVE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                errors: false
            });

        case ChatActionTypes.CHAT_REMOVE_SUCCESS:
            const newChats = state.entries.filter(c => c.id !== action.payload);

            return Object.assign({}, state, {entries: newChats, loading: false});

        case ChatActionTypes.CHAT_REMOVE_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: true
            });

        case ChatActionTypes.MESSAGE_ADD:
            const newChatMessages = state.entries.map(item => {
                if (item.id === +action.payload.chatId){
                    item.messages.concat(action.payload);
                }
                return item;
            });

            return Object.assign({}, state, {entries: newChatMessages});

        case ChatActionTypes.MESSAGES_ADD_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                errors: false
            });

        case ChatActionTypes.MESSAGES_ADD_SUCCESS:
            const newChatMessagesDB = state.entries.map(item => {
                if (item.id === +action.payload.chatId){
                    item.messages.push(action.payload);
                }
                return item;
            });

            return Object.assign({}, state, {
                loading: false,
                errors: false,
                entries: newChatMessagesDB
            });

        case ChatActionTypes.MESSAGES_ADD_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: true
            });

        case ChatActionTypes.MESSAGES_UPDATE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                errors: false
            });

        case ChatActionTypes.MESSAGES_UPDATE_SUCCESS:
            const updateMessagesDB = state.entries.map(item => {
                if (item.id === +action.payload.chatId){
                    item.messages = item.messages.map(m => {
                        if (m.id === action.payload.id) {
                            m = action.payload;
                        }
                        return m;
                    });
                }
                return item;
            });

            return Object.assign({}, state, {
                loading: false,
                errors: false,
                entries: updateMessagesDB
            });

        case ChatActionTypes.MESSAGES_UPDATE_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: true
            });

        default:
            return state;
    }
};
