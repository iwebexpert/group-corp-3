import {ActionCreator} from "redux";

export enum ChatActionTypes {
    CHATS_LOAD = 'CHATS_LOAD',
    CHAT_ADD = 'CHAT_ADD',
    MESSAGE_ADD = 'MESSAGE_ADD',
    REMOVE_CHAT = 'REMOVE_CHAT',
    CHANGE_CHAT = 'CHANGE_CHAT'
}

export type ChatsLoadAction = {
    type: ChatActionTypes.CHATS_LOAD;
};

export type ChatAddAction = {
    type: ChatActionTypes.CHAT_ADD;
    payload: ChatAdd;
};

export type MessageAddAction = {
    type: ChatActionTypes.MESSAGE_ADD;
    payload: MessagesListData;
};

export type RemoveChatAction = {
    type: ChatActionTypes.REMOVE_CHAT;
    payload: number;
};

export type ChangeChatAction = {
    type: ChatActionTypes.CHANGE_CHAT;
    payload: number;
};

export type ChatsActions = ChatsLoadAction | ChatAddAction | MessageAddAction | RemoveChatAction | ChangeChatAction;

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
    type: ChatActionTypes.CHATS_LOAD
});

export const chatAdd: ActionCreator<ChatAddAction> = (chatAdd: ChatAdd) => ({
    type: ChatActionTypes.CHAT_ADD,
    payload: chatAdd
});

export const messageAdd: ActionCreator<MessageAddAction> = (message: MessagesListData) => ({
    type: ChatActionTypes.MESSAGE_ADD,
    payload: message
});

export const removeChat: ActionCreator<RemoveChatAction> = (chatId: number) => ({
    type: ChatActionTypes.REMOVE_CHAT,
    payload: chatId
});

export const changeChat: ActionCreator<ChangeChatAction> = (chatId: number) => ({
    type: ChatActionTypes.CHANGE_CHAT,
    payload: chatId
});
