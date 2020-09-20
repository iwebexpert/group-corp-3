import {ActionCreator} from "redux";
import {createAction, RequestError} from "redux-api-middleware";

export enum ChatActionTypes {
    CHATS_LOAD = 'CHATS_LOAD',
    CHAT_ADD = 'CHAT_ADD',
    MESSAGE_ADD = 'MESSAGE_ADD',
    REMOVE_CHAT = 'REMOVE_CHAT',
    CHANGE_CHAT = 'CHANGE_CHAT',

    CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST',
    CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS',
    CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE',
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
    payload: MessagesAdd;
};

export type RemoveChatAction = {
    type: ChatActionTypes.REMOVE_CHAT;
    payload: number;
};

export type ChangeChatAction = {
    type: ChatActionTypes.CHANGE_CHAT;
    payload: number;
};

export type chatsLoadRequestAction = {
    type: ChatActionTypes.CHATS_LOAD_REQUEST
}

export type chatsLoadSuccessRequestAction = {
    type: ChatActionTypes.CHATS_LOAD_SUCCESS,
    payload: RequestError,
    error: boolean
}

export type chatsLoadFailureAction = {
    type: ChatActionTypes.CHATS_LOAD_FAILURE
}

export type ChatsActions = ChatsLoadAction | ChatAddAction | MessageAddAction | RemoveChatAction | ChangeChatAction
    | chatsLoadRequestAction | chatsLoadSuccessRequestAction | chatsLoadFailureAction;

export const chatsLoadDB = () => createAction({
    endpoint: "http://localhost:4000/chats?_embed=messages",
    method: "GET",
    headers: {'Content-Type': 'application/json'},
    types: [
        ChatActionTypes.CHATS_LOAD_REQUEST,
        ChatActionTypes.CHATS_LOAD_SUCCESS,
        ChatActionTypes.CHATS_LOAD_FAILURE
    ]
});

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
    type: ChatActionTypes.CHATS_LOAD
});

export const chatAdd: ActionCreator<ChatAddAction> = (chatAdd: ChatAdd) => ({
    type: ChatActionTypes.CHAT_ADD,
    payload: chatAdd
});

export const messageAdd: ActionCreator<MessageAddAction> = (message: MessagesAdd) => ({
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
