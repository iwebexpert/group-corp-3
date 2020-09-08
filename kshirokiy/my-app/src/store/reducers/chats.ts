import {Reducer} from 'redux';

import {ChatsActionTypes} from '../actions/actionType';
import {chatsData} from '../../ChatList/ChatList';
import {ChatsData} from '../../types/types';

export type ChatsReducerState = {
    chats: ChatsData[]
};

const initialState: ChatsReducerState = {
    chats: []
};

export const chatsReducer: Reducer<ChatsReducerState, any> = (state = initialState, action) => {
    switch (action.type) {
        case ChatsActionTypes.CHATS_LOAD:
            return Object.assign({}, state, {
                chats: chatsData
            });
        case ChatsActionTypes.CHATS_MESSAGE_SEND:
            const {chatId, message, author, id} = action.payload;
            return Object.assign({}, state, {
                chats: state.chats.map(ch => {
                    if (+ch.id == +chatId) {
                        return {
                            ...ch,
                            messages: [...ch.messages, {message, author, id, chatId}]
                        }
                    } else {
                        return ch
                    }
                })
            })

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
