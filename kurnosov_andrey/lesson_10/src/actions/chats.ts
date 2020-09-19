import {ActionCreator} from 'redux';
import { MessageData } from '../logic/domain/MessageData';
import { ChatData } from '../logic/domain/ChatData';

export enum ChatsActionTypes {
    CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND',
//    CHATS_MESSAGE_REMOVE = 'CHATS_MESSAGE_REMOVE',
    CHATS_LOAD = 'CHATS_LOAD',
    CHATS_ADD = 'CHATS_NEW',
//    CHATS_REMOVE = 'CHATS_REMOVE',
//    CHATS_UPDATE = 'CHATS_UPDATE',
}

export type ChatsLoadAction = {
    type: ChatsActionTypes.CHATS_LOAD;
};

export type ChatsAddAction = {
    type: ChatsActionTypes.CHATS_ADD;
    payload: { chat: ChatData };
};

export type ChatsMessageSendAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_SEND;
    payload: { message: MessageData & {chatId: ChatData['id']} };
};



//Для reducer
export type ChatsActions = ChatsLoadAction | ChatsAddAction | ChatsMessageSendAction;

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
    type: ChatsActionTypes.CHATS_LOAD,
});

export const chatsAdd: ActionCreator<ChatsAddAction> = (chat) => ({
    type: ChatsActionTypes.CHATS_ADD,
    payload: { chat }
});

export const chatsMessageSend: ActionCreator<ChatsMessageSendAction> = (message) => ({
    type: ChatsActionTypes.CHATS_MESSAGE_SEND,
    payload: { message }
});