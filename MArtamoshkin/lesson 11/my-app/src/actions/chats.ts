import { ActionCreator, Dispatch } from "redux";
import { RequestError } from "redux-api-middleware";

export enum ChatsActionTypes {
    CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST',
    CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS',
    CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE',

    CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND',
    CHATS_MESSAGE_SEND_SUCCESS = 'CHATS_MESSAGE_SEND_SUCCESS',
    CHATS_MESSAGE_SEND_FAILURE = 'CHATS_MESSAGE_SEND_FAILURE',

    CHATS_NEW_REQUEST = 'CHATS_NEW_REQUEST',
    CHATS_NEW_FAILURE = 'CHATS_NEW_FAILURE',
    CHATS_NEW_SUCCESS = 'CHATS_NEW_SUCCESS',

    CHATS_IS_TYPING = 'CHATS_IS_TYPING',
    CHATS_IS_FIRED = 'CHATS_IS_FIRED',
    CHATS_DELETE = 'CHATS_DELETE',

};

// Load chats
export type ChatsLoadRequestAction = {
    type: ChatsActionTypes.CHATS_LOAD_REQUEST;
};

export type ChatsLoadSuccessAction = {
    type: ChatsActionTypes.CHATS_LOAD_SUCCESS;
    payload: Chat[];
};

export type ChatsLoadFailureAction = {
    type: ChatsActionTypes.CHATS_LOAD_FAILURE;
    payload: RequestError;
    error: boolean;
};

export const chatsLoad = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(chatsLoadRequest());
            const result = await fetch('http://localhost:4000/chats?_embed=messages&_expand=author');
            dispatch(chatsLoadSuccess(await result.json()));
        } catch (error) {
            dispatch(chatsLoadFailure(error));
        }
    };
};

export const chatsLoadRequest: ActionCreator<ChatsLoadRequestAction> = () => ({
    type: ChatsActionTypes.CHATS_LOAD_REQUEST,
});

export const chatsLoadSuccess: ActionCreator<ChatsLoadSuccessAction> = (data: any) => ({
    type: ChatsActionTypes.CHATS_LOAD_SUCCESS,
    payload: data,
});

export const chatsLoadFailure: ActionCreator<ChatsLoadFailureAction> = (error: RequestError) => ({
    type: ChatsActionTypes.CHATS_LOAD_FAILURE,
    payload: error,
    error: true,
});


//Chats new
export type ChatsNewRequestAction = {
    type: ChatsActionTypes.CHATS_NEW_REQUEST;
};

export type ChatsNew = {
    type: ChatsActionTypes.CHATS_NEW_SUCCESS,
    payload: Chat;
};

export type ChatsNewFailureAction = {
    type: ChatsActionTypes.CHATS_NEW_FAILURE;
    payload: RequestError;
    error: boolean;
};

export const chatsNewRequest: ActionCreator<ChatsNewRequestAction> = () => ({
    type: ChatsActionTypes.CHATS_NEW_REQUEST
});

export const chatsNewSuccess: ActionCreator<ChatsNew> = (chat: Chat) => ({
    type: ChatsActionTypes.CHATS_NEW_SUCCESS,
    payload: chat
});

export const chatsNewFailure: ActionCreator<ChatsNewFailureAction> = (error: RequestError) => ({
    type: ChatsActionTypes.CHATS_NEW_FAILURE,
    payload: error,
    error: true,
});

export const chatsNewSend = (author: Author, id: number) => {
    const chat = { authorId: author.id, messages: [], id, isFired: true, responseStep: 0 };

    return async (dispatch: Dispatch) => {
        try {
            dispatch(chatsNewRequest());
            const result = await fetch('http://localhost:4000/chats', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(chat),
            });
            dispatch(chatsNewSuccess({ ...chat, author }));

        } catch (error) {
            dispatch(chatsNewFailure(error));
        }
    };
};

// Chats send
export type ChatsMessageSendType = { message: Message, chatId: number, isResponse?: boolean; };

export type ChatsMessageSendAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_SEND;
    payload: ChatsMessageSendType;
};

export type ChatsIsTyping = {
    type: ChatsActionTypes.CHATS_IS_TYPING;
    payload: { isTyping: boolean, chatId: number; };
};

export type ChatsIsFired = {
    type: ChatsActionTypes.CHATS_IS_FIRED;
    payload: { isFired: boolean, chatId: number; };
};

export type ChatsDelete = {
    type: ChatsActionTypes.CHATS_DELETE,
    payload: { id: number; };
};

export const chatsMessageSend: ActionCreator<ChatsMessageSendAction> = (message: Message, chatId: number, isResponse?: boolean) => ({
    type: ChatsActionTypes.CHATS_MESSAGE_SEND,
    payload: { message, chatId, isResponse }
});

export const chatsSetIsTyping: ActionCreator<ChatsIsTyping> = (chatId: number, isTyping: boolean) => ({
    type: ChatsActionTypes.CHATS_IS_TYPING,
    payload: { isTyping, chatId }
});

export const chatsSetIsFired: ActionCreator<ChatsIsFired> = (chatId: number, isFired: boolean) => ({
    type: ChatsActionTypes.CHATS_IS_FIRED,
    payload: { isFired, chatId }
});

export const chatsDelete: ActionCreator<ChatsDelete> = (id: number) => ({
    type: ChatsActionTypes.CHATS_DELETE,
    payload: { id }
});
