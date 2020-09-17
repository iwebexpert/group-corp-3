import { ActionCreator, Dispatch } from 'redux';
import { AppState } from '../store';

// Define actions types
export enum MessagesActionTypes {
  // Loading actions
  MESSAGES_LOAD_REQUEST = 'MESSAGES_LOAD_REQUEST',
  MESSAGES_LOAD_SUCCESS = 'MESSAGES_LOAD_SUCCESS',
  MESSAGES_LOAD_FAILURE = 'MESSAGES_LOAD_FAILURE',

  // Main actions
  MESSAGES_ADD = 'MESSAGES_ADD',
  MESSAGES_DELETE = 'MESSAGES_DELETE',
  MESSAGES_SELECT = 'MESSAGES_SELECT'
}

// Define actions functions types
export type MessagesLoadRequestAction = {
  type: MessagesActionTypes.MESSAGES_LOAD_REQUEST;
};

export type MessagesLoadSuccessAction = {
  type: MessagesActionTypes.MESSAGES_LOAD_SUCCESS;
  payload: Message[];
};

export type MessagesLoadFailureAction = {
  type: MessagesActionTypes.MESSAGES_LOAD_FAILURE;
  payload: string;
};

export type MessagesAddAction = {
  type: MessagesActionTypes.MESSAGES_ADD;
  payload: Message;
};

export type MessagesDeleteAction = {
  type: MessagesActionTypes.MESSAGES_DELETE;
  payload: string;
};

// All actions
export type MessagesActions = MessagesLoadRequestAction | MessagesLoadSuccessAction | MessagesLoadFailureAction | MessagesAddAction | MessagesDeleteAction;

export const messagesLoad = (chatId: string) =>
  async (dispatch: Dispatch, getState: () => AppState, { baseUrl }: ThunkExtraArgs) => {
    try {
      console.log('here');

      dispatch(messagesLoadRequest());
      const result = await fetch(`${baseUrl}/messages?chatId=${chatId}`);
      dispatch(messagesLoadSuccess(await result.json()));
    } catch (error) {
      dispatch(messagesLoadError(error));
    }
  };

// Exporting actions
export const messagesLoadRequest: ActionCreator<MessagesLoadRequestAction> = () => ({
  type: MessagesActionTypes.MESSAGES_LOAD_REQUEST,
});

export const messagesLoadSuccess: ActionCreator<MessagesLoadSuccessAction> = (payload: Message[]) => ({
  type: MessagesActionTypes.MESSAGES_LOAD_SUCCESS,
  payload
});

export const messagesLoadError: ActionCreator<MessagesLoadFailureAction> = (payload: string) => ({
  type: MessagesActionTypes.MESSAGES_LOAD_FAILURE,
  payload
});

export const messagesAdd: ActionCreator<MessagesAddAction> = (payload: Message) => ({
  type: MessagesActionTypes.MESSAGES_ADD,
  payload
});

export const messagesDelete: ActionCreator<MessagesDeleteAction> = (payload: string) => ({
  type: MessagesActionTypes.MESSAGES_DELETE,
  payload
});
