import update from 'immutability-helper';
import { Reducer } from 'redux';
import { MessagesActions, MessagesActionTypes } from './messagesActions';

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
        loading: true,
      };


    case MessagesActionTypes.MESSAGES_LOAD_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };

    case MessagesActionTypes.MESSAGES_LOAD_ERROR:
      console.warn(action.payload);
      return {
        ...state,
        messages: [],
        loading: false,
      };

    case MessagesActionTypes.MESSAGES_ADD:
      return update(state, {
        messages: {
          $push: [action.payload]
        },
      });

    case MessagesActionTypes.MESSAGES_DELETE:
      // Getting message array id
      let id = state.messages.findIndex(message => message.id === action.payload);
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