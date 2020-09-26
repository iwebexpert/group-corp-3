import { ActionCreator } from 'redux';
import { type } from 'os';
import { MessageProps } from '../Message/Message';
import { MessageRequest } from '../MessageForm/MessageForm';

export enum ChatActionTypes {
    CHATS_LOAD = 'CHATS_LOAD',
    CHATS_MESSAGE_SEND = 'CHATS_MESSGAE_SEND',
    CHATS_CHAT_ADDED = 'CHATS_CHAT_ADDED'
}

export type ChatsLoadAction = {
    type: ChatActionTypes.CHATS_LOAD,
};

export type ChatsMessageSendAction = {
    type: ChatActionTypes.CHATS_MESSAGE_SEND,
    payload: {
        text: string,
        author: string,
        timeStamp: Date,
        chatId: number
    }
}

export type ChatsChatAddedAction = {
    type: ChatActionTypes.CHATS_CHAT_ADDED,
    payload: {
        title: string
    }
}

export type ChatsActions = ChatsLoadAction | ChatsMessageSendAction | ChatsChatAddedAction;

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({ type: ChatActionTypes.CHATS_LOAD });

export const chatsMessageSend: ActionCreator<ChatsMessageSendAction> = (message: MessageRequest, chatId: number) => ({
    type: ChatActionTypes.CHATS_MESSAGE_SEND,
    payload: {
        text: message.message,
        author: message.author,
        timeStamp: new Date(),
        chatId: chatId
    }
});

export const chatsChatAdded: ActionCreator<ChatsChatAddedAction> = (title: string) => ({
    type: ChatActionTypes.CHATS_CHAT_ADDED,
    payload: { title: title }
});