import { ActionCreator, Dispatch } from "redux";
import { RequestError } from "redux-api-middleware";
import { ChatsActionTypes } from "../chats";

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
            await fetch('http://localhost:4000/chats', {
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
