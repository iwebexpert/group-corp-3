import { ActionCreator } from 'redux';

// Define actions types
export enum ChatsActionTypes {
    // Loading actions
    CHATS_LOAD = 'CHATS_LOAD',

    // TODO Add loading logic
    // CHATS_LOAD_START = 'CHATS_LOAD_START',
    // CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS',
    // CHATS_LOAD_ERROR = 'CHATS_LOAD_ERROR',

    // Main actions
    CHATS_ADD = 'CHATS_ADD',
    CHATS_DELETE = 'CHATS_DELETE',
    CHATS_SELECT = 'CHATS_SELECT'
}

// Define actions functions types
export type ChatsLoadAction = {
    type: ChatsActionTypes.CHATS_LOAD;
};

export type ChatsAddAction = {
    type: ChatsActionTypes.CHATS_ADD;
    chat: Chat;
};

export type ChatsDeleteAction = {
    type: ChatsActionTypes.CHATS_DELETE;
    id: string;
};

// All actions
export type ChatsActions = ChatsLoadAction | ChatsAddAction | ChatsDeleteAction;

// Exporting actions
export const chatsLoad: ActionCreator<ChatsLoadAction> = () => ({
    type: ChatsActionTypes.CHATS_LOAD,
});

export const chatsAdd: ActionCreator<ChatsAddAction> = (chat: Chat) => ({
    type: ChatsActionTypes.CHATS_ADD,
    chat
});

export const chatsDelete: ActionCreator<ChatsDeleteAction> = (id: string) => ({
    type: ChatsActionTypes.CHATS_DELETE,
    id
});