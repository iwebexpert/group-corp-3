import update from 'immutability-helper';
import { Reducer } from 'redux';
import { ChatsActions, ChatsActionTypes } from './chatsActions';

export type ChatsReducerState = {
  loading: boolean;
  chats: Chat[];
};

const initialState: ChatsReducerState = {
  loading: false,
  chats: [],
};

export const chatsReducer: Reducer<ChatsReducerState, ChatsActions> = (state = initialState, action) => {
  switch (action.type) {
    case ChatsActionTypes.CHATS_LOAD:
      return {
        ...state,
        loading: true,
      };

    case ChatsActionTypes.CHATS_LOAD_SUCCESS:
      return {
        ...state,
        chats: action.payload,
        loading: false,
      };

    case ChatsActionTypes.CHATS_LOAD_ERROR:
      console.warn(action.payload);
      return {
        ...state,
        chats: [],
        loading: false,
      };

    case ChatsActionTypes.CHATS_ADD:
      return update(state, {
        chats: {
          $push: [action.payload]
        },
      });

    case ChatsActionTypes.CHATS_DELETE:
      // Getting chat array id
      const id = state.chats.findIndex(chat => chat.id === action.payload);
      if (id !== -1) {
        return update(state, {
          chats: {
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