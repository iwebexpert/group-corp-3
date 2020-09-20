import { ActionCreator, Dispatch } from "redux";
import { RequestError } from "redux-api-middleware";
import { ChatsActionTypes } from "../chats";

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

export const chatsLoadSuccess: ActionCreator<ChatsLoadSuccessAction> = (data: Chat[]) => ({
    type: ChatsActionTypes.CHATS_LOAD_SUCCESS,
    payload: data,
});

export const chatsLoadFailure: ActionCreator<ChatsLoadFailureAction> = (error: RequestError) => ({
    type: ChatsActionTypes.CHATS_LOAD_FAILURE,
    payload: error,
    error: true,
});