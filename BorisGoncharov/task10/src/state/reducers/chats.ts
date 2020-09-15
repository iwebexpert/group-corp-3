import update from 'immutability-helper';
import { Reducer } from 'redux';
import { ChatsActions, ChatsActionTypes } from '../actions/chats';

export type ChatsReducerState = {
  loading: boolean;
  chats: Chat[];
};

const initialState: ChatsReducerState = {
  loading: false,
  chats: [],
};

export const chatsReducer: Reducer<ChatsReducerState, ChatsActions> = (state = initialState, action) => {
  // Chat index in array
  let index;

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
      index = state.chats.findIndex(chat => chat.id === action.payload);
      if (index !== -1) {
        return update(state, {
          chats: {
            $splice: [[index, 1]],
          },
        });
      }
      return state;

    case ChatsActionTypes.CHATS_SET_TYPING_AUTHOR:
      index = state.chats.findIndex(chat => chat.id === action.payload.chatId);

      if (index !== -1) {
        return update(state, {
          chats: {
            [index]: {
              typingAuthor: {
                $set: action.payload.author
              },
            }
          },
        });
      }
      return state;

    case ChatsActionTypes.CHATS_RESET_TYPING_AUTHOR:
      index = state.chats.findIndex(chat => chat.id === action.payload);

      if (index !== -1) {
        return update(state, {
          chats: {
            [index]: {
              typingAuthor: {
                $set: ''
              },
            }
          },
        });
      }
      return state;

    default:
      return state;
  }
}