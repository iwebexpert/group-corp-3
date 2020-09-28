import { ActionCreator, Dispatch } from "redux";
import { RequestError } from "redux-api-middleware";
import { ChatsActionTypes } from "../chats";

export type ChatsDeleteSuccessAction = {
    type: ChatsActionTypes.CHATS_DELETE_SUCCESS,
    payload: { id: number; };
};

export type ChatsDeleteRequestAction = {
    type: ChatsActionTypes.CHATS_DELETE_REQUEST;
};

export type ChatsDeleteFailureAction = {
    type: ChatsActionTypes.CHATS_DELETE_FAILURE;
    payload: RequestError;
    error: boolean;
};

export const chatsDeleteSuccess: ActionCreator<ChatsDeleteSuccessAction> = (id: number) => ({
    type: ChatsActionTypes.CHATS_DELETE_SUCCESS,
    payload: { id }
});

export const chatsDeleteRequest: ActionCreator<ChatsDeleteRequestAction> = () => ({
    type: ChatsActionTypes.CHATS_DELETE_REQUEST
});

export const chatsDeleteFailure: ActionCreator<ChatsDeleteFailureAction> = (error: RequestError) => ({
    type: ChatsActionTypes.CHATS_DELETE_FAILURE,
    payload: error,
    error: true,
});

export const chatsDelete = (id: number) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(chatsDeleteRequest());
            await fetch(`/api/chats/${id}`, { method: 'DELETE' });
            dispatch(chatsDeleteSuccess(id));
        } catch (error) {
            dispatch(chatsDeleteFailure(error));
        }
    };
};
