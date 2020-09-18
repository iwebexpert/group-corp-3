import { ActionCreator, Dispatch } from 'redux';
import { AppState } from '../store';

// Define actions types
export enum MessagesActionTypes {
  // Loading
  MESSAGES_LOAD_REQUEST = 'MESSAGES_LOAD_REQUEST',
  MESSAGES_LOAD_SUCCESS = 'MESSAGES_LOAD_SUCCESS',
  MESSAGES_LOAD_FAILURE = 'MESSAGES_LOAD_FAILURE',

  // Add
  MESSAGES_ADD_REQUEST = 'MESSAGES_ADD_REQUEST',
  MESSAGES_ADD_SUCCESS = 'MESSAGES_ADD_SUCCESS',
  MESSAGES_ADD_FAILURE = 'MESSAGES_ADD_FAILURE',

  // Add
  MESSAGES_DELETE_REQUEST = 'MESSAGES_DELETE_REQUEST',
  MESSAGES_DELETE_SUCCESS = 'MESSAGES_DELETE_SUCCESS',
  MESSAGES_DELETE_FAILURE = 'MESSAGES_DELETE_FAILURE',

  // Other
  MESSAGES_SHOW_LOADING = 'MESSAGES_SHOW_LOADING',
  MESSAGES_MARK_SENT = 'MESSAGES_MARK_SENT',
}

// Define actions functions types
// Load
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

// Add
export type MessagesAddRequestAction = {
  type: MessagesActionTypes.MESSAGES_ADD_REQUEST;
  payload: Message;
};

export type MessagesAddSuccessAction = {
  type: MessagesActionTypes.MESSAGES_ADD_SUCCESS;
  payload: string;
};

export type MessagesAddFailureAction = {
  type: MessagesActionTypes.MESSAGES_ADD_FAILURE;
  payload: string;
};

// Delete
export type MessagesDeleteRequestAction = {
  type: MessagesActionTypes.MESSAGES_DELETE_REQUEST;
};

export type MessagesDeleteSuccessAction = {
  type: MessagesActionTypes.MESSAGES_DELETE_SUCCESS;
  payload: string;
};

export type MessagesDeleteFailureAction = {
  type: MessagesActionTypes.MESSAGES_DELETE_FAILURE;
  payload: string;
};

export type MessagesShowLoadingAction = {
  type: MessagesActionTypes.MESSAGES_SHOW_LOADING;
};

// All actions
export type MessagesActions =
  // Load
  MessagesLoadRequestAction |
  MessagesLoadSuccessAction |
  MessagesLoadFailureAction |

  // Add
  MessagesAddRequestAction |
  MessagesAddSuccessAction |
  MessagesAddFailureAction |

  // Delete
  MessagesDeleteRequestAction |
  MessagesDeleteSuccessAction |
  MessagesDeleteFailureAction |

  // Other
  MessagesShowLoadingAction;

// Exporting actions
// Load
export const messagesLoad = (chatId: string) =>
  async (dispatch: Dispatch, getState: () => AppState, { baseUrl }: ThunkExtraArgs) => {
    try {
      dispatch(messagesLoadRequest());
      const result = await fetch(`${baseUrl}/messages?chatId=${chatId}`);
      dispatch(messagesLoadSuccess(await result.json()));
    } catch (error) {
      dispatch(messagesLoadError(error));
    }
  };

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

// Add
export const messagesAdd = (message: Message) =>
  async (dispatch: Dispatch, getState: () => AppState, { baseUrl }: ThunkExtraArgs) => {
    try {
      dispatch(messagesAddRequest(message));
      const result = await fetch(`${baseUrl}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message),
      });
      dispatch(messagesAddSuccess((await result.json() as Message).id));
    } catch (error) {
      dispatch(messagesAddError(error));
    }
  };

export const messagesAddRequest: ActionCreator<MessagesAddRequestAction> = (payload: Message) => ({
  type: MessagesActionTypes.MESSAGES_ADD_REQUEST,
  payload
});

export const messagesAddSuccess: ActionCreator<MessagesAddSuccessAction> = (payload: string) => ({
  type: MessagesActionTypes.MESSAGES_ADD_SUCCESS,
  payload
});

export const messagesAddError: ActionCreator<MessagesAddFailureAction> = (payload: string) => ({
  type: MessagesActionTypes.MESSAGES_ADD_FAILURE,
  payload
});

// Delete
export const messagesDelete = (id: string) =>
  async (dispatch: Dispatch, getState: () => AppState, { baseUrl }: ThunkExtraArgs) => {
    try {
      dispatch(messagesDeleteRequest());
      await fetch(`${baseUrl}/messages/${id}`, {
        method: 'DELETE',
      });
      dispatch(messagesDeleteSuccess(id));
    } catch (error) {
      dispatch(messagesDeleteError(error));
    }
  };

export const messagesDeleteRequest: ActionCreator<MessagesDeleteRequestAction> = () => ({
  type: MessagesActionTypes.MESSAGES_DELETE_REQUEST,
});

export const messagesDeleteSuccess: ActionCreator<MessagesDeleteSuccessAction> = (payload: string) => ({
  type: MessagesActionTypes.MESSAGES_DELETE_SUCCESS,
  payload
});

export const messagesDeleteError: ActionCreator<MessagesDeleteFailureAction> = (payload: string) => ({
  type: MessagesActionTypes.MESSAGES_DELETE_FAILURE,
  payload
});

// Other
export const messagesShowLoading: ActionCreator<MessagesShowLoadingAction> = () => ({
  type: MessagesActionTypes.MESSAGES_SHOW_LOADING,
});