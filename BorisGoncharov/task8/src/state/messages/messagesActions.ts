import { ActionCreator } from 'redux';

// Define actions types
export enum MessagesActionTypes {
    // Loading actions
    MESSAGES_LOAD = 'MESSAGES_LOAD',

    // TODO Add loading logic
    // MESSAGES_LOAD_START = 'MESSAGES_LOAD_START',
    // MESSAGES_LOAD_SUCCESS = 'MESSAGES_LOAD_SUCCESS',
    // MESSAGES_LOAD_ERROR = 'MESSAGES_LOAD_ERROR',

    // Main actions
    MESSAGES_ADD = 'MESSAGES_ADD',
    MESSAGES_DELETE = 'MESSAGES_DELETE',
    MESSAGES_SELECT = 'MESSAGES_SELECT'
}

// Define actions functions types
export type MessagesLoadAction = {
    type: MessagesActionTypes.MESSAGES_LOAD;
};

export type MessagesAddAction = {
    type: MessagesActionTypes.MESSAGES_ADD;
    message: Message;
};

export type MessagesDeleteAction = {
    type: MessagesActionTypes.MESSAGES_DELETE;
    id: string;
};

// All actions
export type MessagesActions = MessagesLoadAction | MessagesAddAction | MessagesDeleteAction;

// Exporting actions
export const messagesLoad: ActionCreator<MessagesLoadAction> = () => ({
    type: MessagesActionTypes.MESSAGES_LOAD,
});

export const messagesAdd: ActionCreator<MessagesAddAction> = (message: Message) => ({
    type: MessagesActionTypes.MESSAGES_ADD,
    message
});

export const messagesDelete: ActionCreator<MessagesDeleteAction> = (id: string) => ({
    type: MessagesActionTypes.MESSAGES_DELETE,
    id
});
