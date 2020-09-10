import {ActionCreator} from "redux";

export enum ChatActionTypes {
    CHATS_LOAD = 'CHATS_LOAD',
    CHAT_ADD = 'CHAT_ADD',
    MESSAGE_ADD = 'MESSAGE_ADD'
}

export type ChatsLoadAction = {
    type: ChatActionTypes.CHATS_LOAD;
};

export type ChatAddAction = {
    type: ChatActionTypes.CHAT_ADD;
    payload: string;
};

export type MessageAddAction = {
    type: ChatActionTypes.MESSAGE_ADD;
    payload: MessagesListData;
};

export type ChatsActions = ChatsLoadAction | ChatAddAction | MessageAddAction;

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
    type: ChatActionTypes.CHATS_LOAD
});

export const chatAdd: ActionCreator<ChatAddAction> = (chatName: string) => ({
    type: ChatActionTypes.CHAT_ADD,
    payload: chatName
});

export const messageAdd: ActionCreator<MessageAddAction> = (message: MessagesListData) => ({
    type: ChatActionTypes.MESSAGE_ADD,
    payload: message
});
