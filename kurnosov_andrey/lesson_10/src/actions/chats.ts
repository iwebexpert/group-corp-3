import {ActionCreator} from 'redux';
import { Message, Chat } from '../logic/domain/ChatsService';

export enum ChatsActionTypes {
    CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND',
//    CHATS_MESSAGE_REMOVE = 'CHATS_MESSAGE_REMOVE',
    CHATS_LOAD = 'CHATS_LOAD',
    CHATS_ADD = 'CHATS_NEW',
    CHATS_REMOVE = 'CHATS_REMOVE',
//    CHATS_UPDATE = 'CHATS_UPDATE',
    CHATS_MESSAGE_ARRIVED = 'CHATS_MESSAGE_ARRIVED',
    CHATS_READED = 'CHATS_READED'    
}

export type ChatsLoadAction = {
    type: ChatsActionTypes.CHATS_LOAD;
};

export type ChatsAddAction = {
    type: ChatsActionTypes.CHATS_ADD;
    payload: { chat: Chat };
};

export type ChatsMessageSendAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_SEND;
    payload: { message: Message & {chatId: Chat['id']} };
};


export type ChatsMessageArrivedAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_ARRIVED;
    payload: { message: Message & {chatId: Chat['id']} };
};
export type ChatsReadedAction = {
    type: ChatsActionTypes.CHATS_READED;
    payload: {chatId: Chat['id']};
};



export type ChatRemoveAction = {
    type: ChatsActionTypes.CHATS_REMOVE, 
    payload: { chatId: number }
}


//Для reducer
export type ChatsActions = ChatsLoadAction | 
    ChatsAddAction | 
    ChatsMessageSendAction | 
    ChatsMessageArrivedAction |
    ChatsReadedAction | 
    ChatRemoveAction;

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
    type: ChatsActionTypes.CHATS_LOAD,
});

export const chatsAdd: ActionCreator<ChatsAddAction> = (chat) => ({
    type: ChatsActionTypes.CHATS_ADD,
    payload: { chat }
});

export const chatsRemove: ActionCreator<ChatRemoveAction> = (chatId) => ({
    type: ChatsActionTypes.CHATS_REMOVE,
    payload: { chatId }
});

export const chatsMessageSend: ActionCreator<ChatsMessageSendAction> = (message) => ({
    type: ChatsActionTypes.CHATS_MESSAGE_SEND,
    payload: { message }
});


export const chatsMessageArrived: ActionCreator<ChatsMessageArrivedAction> = (message) => ({
    type: ChatsActionTypes.CHATS_MESSAGE_ARRIVED,
    payload: { message }
});

export const chatsReaded: ActionCreator<ChatsReadedAction> = (chatId: number) => ({
    type: ChatsActionTypes.CHATS_READED,
    payload: { chatId }
});

