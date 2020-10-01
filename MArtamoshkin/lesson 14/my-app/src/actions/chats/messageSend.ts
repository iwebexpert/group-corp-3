import { ActionCreator, Dispatch } from "redux";
import { RequestError } from "redux-api-middleware";
import { ChatsActionTypes } from "../chats";

// Chats send
export type ChatsMessageSendType = { message: Message, chatId: number, isResponse?: boolean; };

export type ChatsMessageSendRequestAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_SEND_REQUEST;
};

export type ChatsMessageSendSuccessAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_SEND_SUCCESS;
    payload: ChatsMessageSendType;
};

export type ChatsMessageSendFailureAction = {
    type: ChatsActionTypes.CHATS_MESSAGE_SEND_FAILURE;
    payload: RequestError;
    error: boolean;
};

export const chatsMessageSendRequest: ActionCreator<ChatsMessageSendRequestAction> = () => ({
    type: ChatsActionTypes.CHATS_MESSAGE_SEND_REQUEST
});

export const chatsMessageSendSuccess: ActionCreator<ChatsMessageSendSuccessAction> =
    (message: Message, chatId: number, isResponse?: boolean) => ({
        type: ChatsActionTypes.CHATS_MESSAGE_SEND_SUCCESS,
        payload: { message, chatId, isResponse }
    });

export const chatsMessageSendFailure: ActionCreator<ChatsMessageSendFailureAction> = (error: RequestError) => ({
    type: ChatsActionTypes.CHATS_MESSAGE_SEND_FAILURE,
    payload: error,
    error: true,
});

export const chatsMessageSend = (message: Message, chatId: number, isResponse?: boolean) => {
    const data = { ...message, chatId, isResponse: !!isResponse, id: Date.now() };

    return async (dispatch: Dispatch) => {
        try {
            dispatch(chatsMessageSendRequest());
            await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });
            dispatch(chatsMessageSendSuccess(message, chatId, isResponse));
        } catch (error) {
            dispatch(chatsMessageSendFailure(error));
        }
    };
};