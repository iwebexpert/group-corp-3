import { ActionCreator } from 'redux';
import { type } from 'os';
import { MessageProps } from '../Message/Message';

export enum ChatActionTypes {
    CHATS_LOAD = 'CHATS_LOAD',
    CHATS_MESSAGE_SEND = 'CHATS_MESSGAE_SEND'
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

export type ChatsActions = ChatsLoadAction | ChatsMessageSendAction;

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({ type: ChatActionTypes.CHATS_LOAD });

export const chatsMessageSend: ActionCreator<ChatsMessageSendAction> = (message: MessageProps, chatId: number) => ({
    type: ChatActionTypes.CHATS_MESSAGE_SEND,
    payload: { ...message, timeStamp: new Date(), chatId: chatId }
});