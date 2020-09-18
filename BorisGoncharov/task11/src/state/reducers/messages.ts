import update from 'immutability-helper';
import { Reducer } from 'redux';
import { MessagesActions, MessagesActionTypes } from '../actions';

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
    case MessagesActionTypes.MESSAGES_LOAD_REQUEST:
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

    case MessagesActionTypes.MESSAGES_LOAD_FAILURE:
    case MessagesActionTypes.MESSAGES_ADD_FAILURE:
    case MessagesActionTypes.MESSAGES_DELETE_FAILURE:
      console.warn(action.payload);
      return {
        ...state,
        messages: [],
        loading: false,
      };

    case MessagesActionTypes.MESSAGES_ADD_SUCCESS:
      return update(state, {
        messages: {
          $push: [action.payload]
        },
        loading: { $set: false }
      });

    case MessagesActionTypes.MESSAGES_DELETE_SUCCESS:
      // Getting message array id
      let id = state.messages.findIndex(message => message.id === action.payload);
      if (id !== -1) {
        return update(state, {
          messages: {
            $splice: [[id, 1]],
          },
          loading: { $set: false }
        });
      }
      return state;

    default:
      return state;
  }
}