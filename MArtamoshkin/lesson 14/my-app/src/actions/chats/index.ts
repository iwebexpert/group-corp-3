import { ActionCreator } from "redux";

export enum ChatsActionTypes {
    CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST',
    CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS',
    CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE',

    CHATS_MESSAGE_SEND_REQUEST = 'CHATS_MESSAGE_SEND_REQUEST',
    CHATS_MESSAGE_SEND_SUCCESS = 'CHATS_MESSAGE_SEND_SUCCESS',
    CHATS_MESSAGE_SEND_FAILURE = 'CHATS_MESSAGE_SEND_FAILURE',

    CHATS_NEW_REQUEST = 'CHATS_NEW_REQUEST',
    CHATS_NEW_FAILURE = 'CHATS_NEW_FAILURE',
    CHATS_NEW_SUCCESS = 'CHATS_NEW_SUCCESS',

    CHATS_IS_TYPING = 'CHATS_IS_TYPING',
    CHATS_IS_FIRED = 'CHATS_IS_FIRED',
   
    CHATS_DELETE_REQUEST = 'CHATS_DELETE_REQUEST',
    CHATS_DELETE_SUCCESS = 'CHATS_DELETE_SUCCESS',
    CHATS_DELETE_FAILURE = 'CHATS_DELETE_FAILURE',
};

export type ChatsIsTyping = {
    type: ChatsActionTypes.CHATS_IS_TYPING;
    payload: { isTyping: boolean, chatId: number; };
};

export type ChatsIsFired = {
    type: ChatsActionTypes.CHATS_IS_FIRED;
    payload: { isFired: boolean, chatId: number; };
};

export const chatsSetIsTyping: ActionCreator<ChatsIsTyping> = (chatId: number, isTyping: boolean) => ({
    type: ChatsActionTypes.CHATS_IS_TYPING,
    payload: { isTyping, chatId }
});

export const chatsSetIsFired: ActionCreator<ChatsIsFired> = (chatId: number, isFired: boolean) => ({
    type: ChatsActionTypes.CHATS_IS_FIRED,
    payload: { isFired, chatId }
});
