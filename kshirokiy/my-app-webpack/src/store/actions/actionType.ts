import {ActionCreator, Dispatch} from 'redux';
import {Item, ItemWithId} from '../../types/types';
import {RequestError} from 'redux-api-middleware';

const fakeTimeout = (ms: any, promise: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            promise.then(resolve, reject)
        }, ms);
    })
};

export enum CommonActionTypes {
    COMMON_LOAD_REQUEST = 'COMMON_LOAD_REQUEST',
    COMMON_LOAD_FAILURE = 'COMMON_LOAD_FAILURE'
};

export enum ChatsActionTypes {
    CHATS_MESSAGE_SEND_BOT = 'CHATS_MESSAGE_SEND_BOT',
    CHATS_ADDING = 'CHATS_ADDING',
    CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS',
    SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
};

export type CommonLoadRequestAction = {
    type: CommonActionTypes.COMMON_LOAD_REQUEST;
};

export type CommonRequestFailureAction = {
    type: CommonActionTypes.COMMON_LOAD_FAILURE;
};

export const commonLoadRequest: ActionCreator<CommonLoadRequestAction> = () => ({
    type: CommonActionTypes.COMMON_LOAD_REQUEST
});

export const commonRequestFailure: ActionCreator<CommonRequestFailureAction> = (error: RequestError) => ({
    type: CommonActionTypes.COMMON_LOAD_FAILURE,
    payload: error,
    error: true
});

export type ChatsLoadSuccessAction = {
    type: ChatsActionTypes.CHATS_LOAD_SUCCESS;
    payload: any;
};

export const chatsLoadSuccess: ActionCreator<ChatsLoadSuccessAction> = (data: any) => ({
    type: ChatsActionTypes.CHATS_LOAD_SUCCESS,
    payload: data,
});

export const chatsLoad = () => {
    return async (dispatch: Dispatch) => { // redux-thunk
        try {
            dispatch(commonLoadRequest());
            const result = await fetch(process.env.APP_SERVER_PATH + '/chats?_embed=messages');
            dispatch(chatsLoadSuccess(await result.json()));
        } catch (error) {
            dispatch(commonRequestFailure(error));
        }
    }
};

export type sendMessagedRequestSuccessAction = {
    type: ChatsActionTypes.SEND_MESSAGE_SUCCESS;
    payload: ItemWithId;
};

export const sendMessagedRequestSuccess: ActionCreator<sendMessagedRequestSuccessAction> = (data: ItemWithId) => ({
    type: ChatsActionTypes.SEND_MESSAGE_SUCCESS,
    payload: data
});

export const sendMessage = (message: any) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(commonLoadRequest());
            delete message.id;
            const result = await fakeTimeout(200, fetch(process.env.APP_SERVER_PATH + '/messages', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message),
                method: 'POST'
            }));
            dispatch(sendMessagedRequestSuccess(await (result as any).json()));
        } catch (error) {
            dispatch(commonRequestFailure(error));
        }
    }
};

export type ChatsMessageSendBotAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_SEND_BOT;
    payload: any;
};

export const chatsMessageBotSend: ActionCreator<ChatsMessageSendBotAction> = (message: ItemWithId) => ({
    type: ChatsActionTypes.CHATS_MESSAGE_SEND_BOT,
    payload: message
});

// add Chat
export type ChatsAddingAction = {
    type: ChatsActionTypes.CHATS_ADDING;
    payload: any;
};

export const chatsAdding: ActionCreator<ChatsAddingAction> = (chat: any) => ({
    type: ChatsActionTypes.CHATS_ADDING,
    payload: chat
});

export const chatAdding = (chat: any) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(commonLoadRequest());
            delete chat.id;
            const result = await fakeTimeout(200, fetch(process.env.APP_SERVER_PATH + '/chats', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(chat),
                method: 'POST'
            }));
            dispatch(chatsAdding(await (result as any).json()));
        } catch (error) {
            dispatch(commonRequestFailure(error));
        }
    }
}


