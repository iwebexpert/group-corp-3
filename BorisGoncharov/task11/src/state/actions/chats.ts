import { ActionCreator, Dispatch } from 'redux';
import { messagesLoad } from '.';
import { AppState } from '../store';

// Define actions types
export enum ChatsActionTypes {
  // Loading actions
  CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST',
  CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS',
  CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE',

  // Delete actions
  CHATS_DELETE_REQUEST = 'CHATS_DELETE_REQUEST',
  CHATS_DELETE_SUCCESS = 'CHATS_DELETE_SUCCESS',
  CHATS_DELETE_FAILURE = 'CHATS_DELETE_FAILURE',

  // Main actions
  CHATS_ADD = 'CHATS_ADD',
  CHATS_DELETE = 'CHATS_DELETE',
  CHATS_SELECT = 'CHATS_SELECT',
  CHATS_SET_TYPING_AUTHOR = 'CHATS_SET_TYPING_AUTHOR',
  CHATS_RESET_TYPING_AUTHOR = 'CHATS_RESET_TYPING_AUTHOR',
  CHATS_MARK_READ = 'CHATS_MARK_READ',
  CHATS_MARK_UNREAD = 'CHATS_MARK_UNREAD',
}

// Define actions functions types
export type ChatsLoadRequestAction = {
  type: ChatsActionTypes.CHATS_LOAD_REQUEST;
};

export type ChatsLoadSuccessAction = {
  type: ChatsActionTypes.CHATS_LOAD_SUCCESS;
  payload: Chat[];
};

export type ChatsLoadFailureAction = {
  type: ChatsActionTypes.CHATS_LOAD_FAILURE;
  payload: string;
};

export type ChatsDeleteRequestAction = {
  type: ChatsActionTypes.CHATS_DELETE_REQUEST;
};

export type ChatsDeleteSuccessAction = {
  type: ChatsActionTypes.CHATS_DELETE_SUCCESS;
  payload: string;
};

export type ChatsDeleteFailureAction = {
  type: ChatsActionTypes.CHATS_DELETE_FAILURE;
  payload: string;
};

export type ChatsAddAction = {
  type: ChatsActionTypes.CHATS_ADD;
  payload: Chat;
};

export type ChatsSetTypingAuthorAction = {
  type: ChatsActionTypes.CHATS_SET_TYPING_AUTHOR;
  payload: { chatId: string, author: string };
};

export type ChatsResetTypingAuthorAction = {
  type: ChatsActionTypes.CHATS_RESET_TYPING_AUTHOR;
  payload: string;
};

export type ChatsMarkReadAction = {
  type: ChatsActionTypes.CHATS_MARK_READ;
  payload: string;
};

export type ChatsMarkUnreadAction = {
  type: ChatsActionTypes.CHATS_MARK_UNREAD;
  payload: string;
};

// All actions
export type ChatsActions =
  // Load
  ChatsLoadRequestAction |
  ChatsLoadSuccessAction |
  ChatsLoadFailureAction |
  // Delete
  ChatsDeleteRequestAction |
  ChatsDeleteSuccessAction |
  ChatsDeleteFailureAction |
  // Add
  ChatsAddAction |
  // Other
  ChatsSetTypingAuthorAction |
  ChatsResetTypingAuthorAction |
  ChatsMarkReadAction |
  ChatsMarkUnreadAction;

// Exporting methods
export const chatsLoad = () =>
  async (dispatch: Dispatch, getState: () => AppState, { baseUrl }: ThunkExtraArgs) => {
    try {
      dispatch(chatsLoadRequest());
      const result = await fetch(`${baseUrl}/chats?_embed=messages`);
      const chats = await result.json();
      dispatch(chatsLoadSuccess(chats));
      // Load messages by first chat id
      dispatch(messagesLoad(chats[0].id) as any);
    } catch (error) {
      dispatch(chatsLoadFailure(error));
    }
  };

export const chatsDelete = (id: string) =>
  async (dispatch: Dispatch, getState: () => AppState, { baseUrl }: ThunkExtraArgs) => {
    try {
      dispatch(chatsDeleteRequest());
      const result = await fetch(`${baseUrl}/chats/${id}`, {
        method: 'DELETE',
      });
      await result.json();
      dispatch(chatsDeleteSuccess(id));
    } catch (error) {
      dispatch(chatsDeleteFailure(error));
    }

  };

// Exporting actions
// Load
export const chatsLoadRequest: ActionCreator<ChatsLoadRequestAction> = () => ({
  type: ChatsActionTypes.CHATS_LOAD_REQUEST,
});

export const chatsLoadSuccess: ActionCreator<ChatsLoadSuccessAction> = (payload: Chat[]) => ({
  type: ChatsActionTypes.CHATS_LOAD_SUCCESS,
  payload
});

export const chatsLoadFailure: ActionCreator<ChatsLoadFailureAction> = (payload: string) => ({
  type: ChatsActionTypes.CHATS_LOAD_FAILURE,
  payload
});

// Delete
export const chatsDeleteRequest: ActionCreator<ChatsDeleteRequestAction> = () => ({
  type: ChatsActionTypes.CHATS_DELETE_REQUEST,
});

export const chatsDeleteSuccess: ActionCreator<ChatsDeleteSuccessAction> = (payload: string) => ({
  type: ChatsActionTypes.CHATS_DELETE_SUCCESS,
  payload
});

export const chatsDeleteFailure: ActionCreator<ChatsDeleteFailureAction> = (payload: string) => ({
  type: ChatsActionTypes.CHATS_DELETE_FAILURE,
  payload
});

// Add
export const chatsAdd: ActionCreator<ChatsAddAction> = (payload: Chat) => ({
  type: ChatsActionTypes.CHATS_ADD,
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

export const chatsMarkRead: ActionCreator<ChatsMarkReadAction> = (payload: string) => ({
  type: ChatsActionTypes.CHATS_MARK_READ,
  payload
});

export const chatsMarkUnread: ActionCreator<ChatsMarkUnreadAction> = (payload: string) => ({
  type: ChatsActionTypes.CHATS_MARK_UNREAD,
  payload
});