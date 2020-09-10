import { ActionCreator } from "redux";

export enum ChatsActionTypes {
    CHATS_LOAD = 'CHATS_LOAD',
    CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND',
    CHATS_NEW = 'CHATS_NEW'
}

export type ChatsLoadAction = {
    type: ChatsActionTypes.CHATS_LOAD;
};

export type ChatsNew = {
    type: ChatsActionTypes.CHATS_NEW,
    payload: Chat;
}

export type ChatsMessageSendAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_SEND;
    payload: {message: Message, chatId: number};
};

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
    type: ChatsActionTypes.CHATS_LOAD,
});

export const chatsMessageSend: ActionCreator<ChatsMessageSendAction> = (message: Message, chatId: number) => ({
    type: ChatsActionTypes.CHATS_MESSAGE_SEND,
    payload: { message, chatId }
})

export const chatsNew: ActionCreator<ChatsNew> = (author: Author) => ({
    type: ChatsActionTypes.CHATS_NEW,
    payload: { author: author, messages: [], id: Date.now() }
})