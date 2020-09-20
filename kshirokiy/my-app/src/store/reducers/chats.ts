import {Reducer} from 'redux';
import {ChatsActionTypes, CommonActionTypes} from '../actions/actionType';
import {ChatsData, ItemWithId} from '../../types/types';

export type ChatsReducerState = {
    chats: ChatsData[],
    loading: boolean,
    error: boolean,
    lastAddMessage?: ItemWithId | any
};

const initialState: ChatsReducerState = {
    chats: [],
    loading: false,
    error: false,
    lastAddMessage: null
};

const settingChatOnMessageSend = (payload: ItemWithId, state: any): any => {
    const {chatId = 0, message, author, id} = payload;
    let newState = Object.assign({}, state, {
        chats: state.chats.map((ch: any) => {
            if (+ch.id == +chatId) {
                return {
                    ...ch,
                    messages: [...ch.messages, {message, author, id, chatId}],
                    answerBot: false
                }
            } else {
                return { ...ch, answerBot: false }
            }
        }),
        loading: false,
        error: false,
        lastAddMessage: payload
    });
    return newState;
}

export const chatsReducer: Reducer<ChatsReducerState, any> = (state = initialState, action) => {
    switch (action.type) {

        case CommonActionTypes.COMMON_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };

        case CommonActionTypes.COMMON_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };

        case ChatsActionTypes.CHATS_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };

        case ChatsActionTypes.CHATS_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                chats: action.payload
            };

        case ChatsActionTypes.CHATS_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };

        case ChatsActionTypes.CHATS_MESSAGE_SEND:
            const {chatId, message, author, id, answerBot} = action.payload;
            return Object.assign({}, state, {
                chats: state.chats.map(ch => {
                    if (+ch.id == +chatId) {
                        return {
                            ...ch,
                            messages: [...ch.messages, {message, author, id, chatId}],
                            answerBot
                        }
                    } else {
                        return { ...ch, answerBot: false }
                    }
                })
            })

        case ChatsActionTypes.SEND_MESSAGE_SUCCESS:
            return settingChatOnMessageSend(action.payload, state);

        case ChatsActionTypes.CHATS_ADDING:
            const {title} = action.payload;
            let joinedChat = {
                id: state.chats.length,
                title,
                messages: []
            };
            return Object.assign({}, state, {chats: [...state.chats, joinedChat]})

        default:
            return state;
    }
}
