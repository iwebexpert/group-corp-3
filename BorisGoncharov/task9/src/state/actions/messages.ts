import { ActionCreator } from 'redux';

// Define actions types
export enum MessagesActionTypes {
  // Loading actions
  MESSAGES_LOAD = 'MESSAGES_LOAD',
  MESSAGES_LOAD_SUCCESS = 'MESSAGES_LOAD_SUCCESS',
  MESSAGES_LOAD_ERROR = 'MESSAGES_LOAD_ERROR',

  // Main actions
  MESSAGES_ADD = 'MESSAGES_ADD',
  MESSAGES_DELETE = 'MESSAGES_DELETE',
  MESSAGES_SELECT = 'MESSAGES_SELECT'
}

// Define actions functions types
export type MessagesLoadAction = {
  type: MessagesActionTypes.MESSAGES_LOAD;
};

export type MessagesLoadSuccessAction = {
  type: MessagesActionTypes.MESSAGES_LOAD_SUCCESS;
  payload: Message[];
};

export type MessagesLoadErrorAction = {
  type: MessagesActionTypes.MESSAGES_LOAD_ERROR;
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
export type MessagesActions = MessagesLoadAction | MessagesLoadSuccessAction | MessagesLoadErrorAction | MessagesAddAction | MessagesDeleteAction;

// Exporting actions
export const messagesLoad: ActionCreator<MessagesLoadAction> = () => ({
  type: MessagesActionTypes.MESSAGES_LOAD,
});

export const messagesLoadSuccess: ActionCreator<MessagesLoadSuccessAction> = (payload: Message[]) => ({
  type: MessagesActionTypes.MESSAGES_LOAD_SUCCESS,
  payload
});

export const messagesLoadError: ActionCreator<MessagesLoadErrorAction> = (payload: string) => ({
  type: MessagesActionTypes.MESSAGES_LOAD_ERROR,
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
