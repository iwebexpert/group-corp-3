import {ActionCreator, Dispatch} from "redux";
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

    CHAT_ADD_REQUEST = 'CHAT_ADD_REQUEST',
    CHAT_ADD_SUCCESS = 'CHAT_ADD_SUCCESS',
    CHAT_ADD_FAILURE = 'CHAT_ADD_FAILURE',

    MESSAGES_ADD_REQUEST = 'MESSAGES_ADD_REQUEST',
    MESSAGES_ADD_SUCCESS = 'MESSAGES_ADD_SUCCESS',
    MESSAGES_ADD_FAILURE = 'MESSAGES_ADD_FAILURE',

    MESSAGES_UPDATE_REQUEST = 'MESSAGES_UPDATE_REQUEST',
    MESSAGES_UPDATE_SUCCESS = 'MESSAGES_UPDATE_SUCCESS',
    MESSAGES_UPDATE_FAILURE = 'MESSAGES_UPDATE_FAILURE',

    CHAT_REMOVE_REQUEST = 'CHAT_REMOVE_REQUEST',
    CHAT_REMOVE_SUCCESS = 'CHAT_REMOVE_SUCCESS',
    CHAT_REMOVE_FAILURE = 'CHAT_REMOVE_FAILURE',
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
    payload: MessageData;
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

export type chatAddRequestAction = {
    type: ChatActionTypes.CHAT_ADD_REQUEST
}

export type chatAddSuccessAction = {
    type: ChatActionTypes.CHAT_ADD_SUCCESS,
    payload: Chat
}

export type chatAddFailureAction = {
    type: ChatActionTypes.CHAT_ADD_FAILURE,
    payload: RequestError,
    error: boolean
}


export type chatRemoveRequestAction = {
    type: ChatActionTypes.CHAT_REMOVE_REQUEST
}

export type chatRemoveSuccessAction = {
    type: ChatActionTypes.CHAT_REMOVE_SUCCESS,
    payload: number
}

export type chatRemoveFailureAction = {
    type: ChatActionTypes.CHAT_REMOVE_FAILURE,
    payload: RequestError,
    error: boolean
}

export type MessagesAddRequestAction = {
    type: ChatActionTypes.MESSAGES_ADD_REQUEST
};

export type MessagesAddSuccessAction = {
    type: ChatActionTypes.MESSAGES_ADD_SUCCESS,
    payload: MessageData
};

export type MessagesAddFailureAction = {
    type: ChatActionTypes.MESSAGES_ADD_FAILURE,
    payload: RequestError,
    error: boolean
};

export type MessagesUpdateRequestAction = {
    type: ChatActionTypes.MESSAGES_UPDATE_REQUEST
};

export type MessagesUpdateSuccessAction = {
    type: ChatActionTypes.MESSAGES_UPDATE_SUCCESS,
    payload: MessageData
};

export type MessagesUpdateFailureAction = {
    type: ChatActionTypes.MESSAGES_UPDATE_FAILURE,
    payload: RequestError,
    error: boolean
};

export type ChatsActions = ChatsLoadAction | ChatAddAction | MessageAddAction | RemoveChatAction | ChangeChatAction
    | chatsLoadRequestAction | chatsLoadSuccessRequestAction | chatsLoadFailureAction
    | chatAddRequestAction | chatAddSuccessAction | chatAddFailureAction
    | chatRemoveRequestAction | chatRemoveSuccessAction | chatRemoveFailureAction
    | MessagesAddRequestAction | MessagesAddSuccessAction | MessagesAddFailureAction
    | MessagesUpdateRequestAction | MessagesUpdateSuccessAction | MessagesUpdateFailureAction
    ;

export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
    type: ChatActionTypes.CHATS_LOAD
});

export const chatAdd: ActionCreator<ChatAddAction> = (chatAdd: ChatAdd) => ({
    type: ChatActionTypes.CHAT_ADD,
    payload: chatAdd
});

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

export const chatAddRequestDB: ActionCreator<chatAddRequestAction> = () => ({
    type: ChatActionTypes.CHAT_ADD_REQUEST
});

export const chatAddSuccessDB: ActionCreator<chatAddSuccessAction> = (chat: Chat) => ({
    type: ChatActionTypes.CHAT_ADD_SUCCESS,
    payload: chat
});

export const chatAddErrorDB: ActionCreator<chatAddFailureAction> = (error: RequestError) => ({
    type: ChatActionTypes.CHAT_ADD_FAILURE,
    payload: error,
    error: true
});

export const chatAddDB = (chat: ChatAdd) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(chatAddRequestDB());

            const newChat: Chat = {
                id: chat.id,
                title: chat.name,
                description: chat.name,
                messages: []
            };

            await fetch("http://localhost:4000/chats", {
                method: 'POST',
                body: JSON.stringify(newChat),
                headers: {'Content-Type': 'application/json'}
            });

            dispatch(chatAddSuccessDB(newChat));
        }catch(error){
            dispatch(chatAddErrorDB(error));
        }
    }
};

export const removeChat: ActionCreator<RemoveChatAction> = (chatId: number) => ({
    type: ChatActionTypes.REMOVE_CHAT,
    payload: chatId
});

export const changeChat: ActionCreator<ChangeChatAction> = (chatId: number) => ({
    type: ChatActionTypes.CHANGE_CHAT,
    payload: chatId
});

export const ChatRemoveRequestDB: ActionCreator<chatRemoveRequestAction> = () => ({
    type: ChatActionTypes.CHAT_REMOVE_REQUEST
});

export const ChatRemoveSuccessDB: ActionCreator<chatRemoveSuccessAction> = (chatId: number) => ({
    type: ChatActionTypes.CHAT_REMOVE_SUCCESS,
    payload: chatId
});

export const ChatRemoveErrorDB: ActionCreator<chatRemoveFailureAction> = (error: RequestError) => ({
    type: ChatActionTypes.CHAT_REMOVE_FAILURE,
    payload: error,
    error: true
});

export const ChatRemoveDB = (chatId: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(ChatRemoveRequestDB());

            await fetch(`http://localhost:4000/chats/${chatId}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            });

            dispatch(ChatRemoveSuccessDB(chatId));
        }catch(error){
            dispatch(ChatRemoveErrorDB(error));
        }
    }
};

export const MessageAdd: ActionCreator<MessageAddAction> = (messages: MessageData) => ({
    type: ChatActionTypes.MESSAGE_ADD,
    payload: messages
});

export const MessagesAddRequestDB: ActionCreator<MessagesAddRequestAction> = () => ({
    type: ChatActionTypes.MESSAGES_ADD_REQUEST
});

export const MessagesAddSuccessDB: ActionCreator<MessagesAddSuccessAction> = (message: MessageData) => ({
    type: ChatActionTypes.MESSAGES_ADD_SUCCESS,
    payload: message
});

export const MessagesAddErrorDB: ActionCreator<MessagesAddFailureAction> = (error: RequestError) => ({
    type: ChatActionTypes.MESSAGES_ADD_FAILURE,
    payload: error,
    error: true
});

export const MessageAddDB = (message: MessageData) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(MessagesAddRequestDB());

            await fetch("http://localhost:4000/messages", {
                method: 'POST',
                body: JSON.stringify(message),
                headers: {'Content-Type': 'application/json'}
            });

            dispatch(MessagesAddSuccessDB(message));
        }catch(error){
            dispatch(MessagesAddErrorDB(error));
        }
    }
};

export const MessagesUpdateRequestDB: ActionCreator<MessagesUpdateRequestAction> = () => ({
    type: ChatActionTypes.MESSAGES_UPDATE_REQUEST
});

export const MessagesUpdateSuccessDB: ActionCreator<MessagesUpdateSuccessAction> = (message: MessageData) => ({
    type: ChatActionTypes.MESSAGES_UPDATE_SUCCESS,
    payload: message
});

export const MessagesUpdateErrorDB: ActionCreator<MessagesUpdateFailureAction> = (error: RequestError) => ({
    type: ChatActionTypes.MESSAGES_UPDATE_FAILURE,
    payload: error,
    error: true
});

export const MessageUpdateDB = (message: MessageData) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(MessagesUpdateRequestDB());

            await fetch(`http://localhost:4000/messages/${message.id}`, {
                method: 'PUT',
                body: JSON.stringify(message),
                headers: {'Content-Type': 'application/json'}
            });

            dispatch(MessagesUpdateSuccessDB(message));
        }catch(error){
            dispatch(MessagesUpdateErrorDB(error));
        }
    }
};
