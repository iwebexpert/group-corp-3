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
    CHATS_LOAD = 'CHATS_LOAD',
    CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND',
    CHATS_ADDING = 'CHATS_ADDING',

    CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST',
    CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS',
    CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE',
    SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS',
    CHATS_ADD = 'CHATS_ADD'
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

export type ChatsLoadRequestAction = {
    type: ChatsActionTypes.CHATS_LOAD_REQUEST;
};

export type ChatsLoadSuccessAction = {
    type: ChatsActionTypes.CHATS_LOAD_SUCCESS;
    payload: any;
};

export type ChatsLoadFailureAction = {
    type: ChatsActionTypes.CHATS_LOAD_FAILURE;
    payload: RequestError;
    error: boolean;
};

// get chat
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

export type ChatsLoadAction = {
    type: ChatsActionTypes.CHATS_LOAD;
};

// export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
//     type: ChatsActionTypes.CHATS_LOAD,
// });

export const chatsLoad = () => {
    return async (dispatch: Dispatch) => { // redux-thunk
        try {
            dispatch(chatsLoadRequest());
            const result = await fetch('http://localhost:3001/chats?_embed=messages');
            dispatch(chatsLoadSuccess(await result.json()));
        } catch(error){
            dispatch(chatsLoadFailure(error));
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
            const result = await fakeTimeout(200, fetch('http://localhost:3001/messages', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message),
                method: 'POST'
            }));
            dispatch(sendMessagedRequestSuccess(await (result as any).json()));
        } catch(error){
            dispatch(commonRequestFailure(error));
        }
    }
};

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



