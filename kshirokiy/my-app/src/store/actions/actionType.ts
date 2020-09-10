import {ActionCreator} from 'redux';
import {Item, ItemWithId} from '../../types/types';

export enum ChatsActionTypes {
    CHATS_LOAD = 'CHATS_LOAD',
    CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND',
    CHATS_ADDING = 'CHATS_ADDING'
}

export type ChatsLoadAction = {
    type: ChatsActionTypes.CHATS_LOAD;
};

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
    type: ChatsActionTypes.CHATS_LOAD,
});

export type ChatsMessageSendAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_SEND;
    payload: any;
};

export const chatsMessageSend: ActionCreator<ChatsMessageSendAction> = (message: ItemWithId) => ({
    type: ChatsActionTypes.CHATS_MESSAGE_SEND,
    payload:  message
});

export type ChatsAddingAction = {
    type: ChatsActionTypes.CHATS_ADDING;
    payload: any;
};

export const chatsAdding: ActionCreator<ChatsAddingAction> = (chat: any) => ({
    type: ChatsActionTypes.CHATS_ADDING,
    payload: chat
});



