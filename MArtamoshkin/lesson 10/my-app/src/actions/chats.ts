import { ActionCreator } from "redux";

export enum ChatsActionTypes {
    CHATS_LOAD = 'CHATS_LOAD',
    CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND',
    CHATS_NEW = 'CHATS_NEW',
    CHATS_IS_TYPING = 'CHATS_IS_TYPING',
    CHATS_IS_FIRED = 'CHATS_IS_FIRED',
    CHATS_DELETE = 'CHATS_DELETE'
};

export type ChatsLoadAction = {
    type: ChatsActionTypes.CHATS_LOAD;
};

export type ChatsIsTyping = {
    type: ChatsActionTypes.CHATS_IS_TYPING;
    payload: { isTyping: boolean, chatId: number; };
};

export type ChatsIsFired = {
    type: ChatsActionTypes.CHATS_IS_FIRED;
    payload: { isFired: boolean, chatId: number; };
};

export type ChatsDelete = {
    type: ChatsActionTypes.CHATS_DELETE,
    payload: { id: number; };
};

export type ChatsNew = {
    type: ChatsActionTypes.CHATS_NEW,
    payload: Chat;
};

export type ChatsMessageSendType = { message: Message, chatId: number, isResponse?: boolean; };

export type ChatsMessageSendAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_SEND;
    payload: ChatsMessageSendType;
};

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
    type: ChatsActionTypes.CHATS_LOAD
});

export const chatsMessageSend: ActionCreator<ChatsMessageSendAction> = (message: Message, chatId: number, isResponse?: boolean) => ({
    type: ChatsActionTypes.CHATS_MESSAGE_SEND,
    payload: { message, chatId, isResponse }
});

export const chatsNew: ActionCreator<ChatsNew> = (author: Author, id: number) => ({
    type: ChatsActionTypes.CHATS_NEW,
    payload: { author: author, messages: [], id, isFired: false, responseStep: 0 }
});

export const chatsSetIsTyping: ActionCreator<ChatsIsTyping> = (chatId: number, isTyping: boolean) => ({
    type: ChatsActionTypes.CHATS_IS_TYPING,
    payload: { isTyping, chatId }
});

export const chatsSetIsFired: ActionCreator<ChatsIsFired> = (chatId: number, isFired: boolean) => ({
    type: ChatsActionTypes.CHATS_IS_FIRED,
    payload: { isFired, chatId }
});


export const chatsDelete: ActionCreator<ChatsDelete> = (id: number) => ({
    type: ChatsActionTypes.CHATS_DELETE,
    payload: { id }
});


