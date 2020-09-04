import update from 'immutability-helper';
import { Reducer } from 'redux';
import { MessagesActions, MessagesActionTypes } from './messagesActions';
import * as db from '../../db.json';

export type MessagesReducerState = {
    loading: boolean;
    messages: Message[];
};

const initialState: MessagesReducerState = {
    loading: false,
    messages: [],
};

export const messagesReducer: Reducer<MessagesReducerState, MessagesActions> = (state = initialState, action) => {
    switch (action.type) {
        case MessagesActionTypes.MESSAGES_LOAD:
            return {
                ...state,
                messages: db.messages,
            };

        case MessagesActionTypes.MESSAGES_ADD:
            const message = action.message;
            return update(state, {
                messages: {
                    $push: [message]
                },
            });

        case MessagesActionTypes.MESSAGES_DELETE:
            // Getting message array id
            let id = state.messages.findIndex(message => message.id === action.id);
            if (id !== -1) {
                return update(state, {
                    messages: {
                        $splice: [[id, 1]],
                    },
                });
            } else {
                return state;
            }

        default:
            return state;
    }
}