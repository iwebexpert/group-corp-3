import { ActionCreator } from 'redux';

// Define actions types
export enum ChatsActionTypes {
  // Loading actions
  CHATS_LOAD = 'CHATS_LOAD',
  CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS',
  CHATS_LOAD_ERROR = 'CHATS_LOAD_ERROR',

  // Main actions
  CHATS_ADD = 'CHATS_ADD',
  CHATS_DELETE = 'CHATS_DELETE',
  CHATS_SELECT = 'CHATS_SELECT',
  CHATS_SET_TYPING_AUTHOR = 'CHATS_SET_TYPING_AUTHOR',
  CHATS_RESET_TYPING_AUTHOR = 'CHATS_RESET_TYPING_AUTHOR'
}

// Define actions functions types
export type ChatsLoadAction = {
  type: ChatsActionTypes.CHATS_LOAD;
};

export type ChatsLoadSuccessAction = {
  type: ChatsActionTypes.CHATS_LOAD_SUCCESS;
  payload: Chat[];
};

export type ChatsLoadErrorAction = {
  type: ChatsActionTypes.CHATS_LOAD_ERROR;
  payload: string;
};

export type ChatsAddAction = {
  type: ChatsActionTypes.CHATS_ADD;
  payload: Chat;
};

export type ChatsDeleteAction = {
  type: ChatsActionTypes.CHATS_DELETE;
  payload: string;
};

export type ChatsSetTypingAuthorAction = {
  type: ChatsActionTypes.CHATS_SET_TYPING_AUTHOR;
  payload: { chatId: string, author: string };
};

export type ChatsResetTypingAuthorAction = {
  type: ChatsActionTypes.CHATS_RESET_TYPING_AUTHOR;
  payload: string;
};

// All actions
export type ChatsActions = ChatsLoadAction | ChatsLoadSuccessAction | ChatsLoadErrorAction | ChatsAddAction | ChatsDeleteAction | ChatsSetTypingAuthorAction | ChatsResetTypingAuthorAction;

// Exporting actions
export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
  type: ChatsActionTypes.CHATS_LOAD,
});

export const chatsLoadSuccess: ActionCreator<ChatsLoadSuccessAction> = (payload: Chat[]) => ({
  type: ChatsActionTypes.CHATS_LOAD_SUCCESS,
  payload
});

export const chatsLoadError: ActionCreator<ChatsLoadErrorAction> = (payload: string) => ({
  type: ChatsActionTypes.CHATS_LOAD_ERROR,
  payload
});

export const chatsAdd: ActionCreator<ChatsAddAction> = (payload: Chat) => ({
  type: ChatsActionTypes.CHATS_ADD,
  payload
});

export const chatsDelete: ActionCreator<ChatsDeleteAction> = (payload: string) => ({
  type: ChatsActionTypes.CHATS_DELETE,
  payload
});

export const chatsSetTypingAuthor: ActionCreator<ChatsSetTypingAuthorAction> = (payload: { chatId: string, author: string }) => ({
  type: ChatsActionTypes.CHATS_SET_TYPING_AUTHOR,
  payload
});

export const chatsResetTypingAuthor: ActionCreator<ChatsResetTypingAuthorAction> = (payload: string) => ({
  type: ChatsActionTypes.CHATS_RESET_TYPING_AUTHOR,
  payload
});