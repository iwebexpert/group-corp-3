import { Middleware } from 'redux';
import { ChatsActionTypes, chatsLoadSuccess, MessagesActionTypes, messagesLoadSuccess, settingsLoadSuccess } from '../actions';
import * as db from '../../db.json';

export const loadDataMiddleware: Middleware = store => next => action => {
  // Emulating different loading speed
  if (action.type === ChatsActionTypes.CHATS_LOAD) {
    setTimeout(() => {
      store.dispatch(chatsLoadSuccess(db.chats));
    }, 2000);
  }

  if (action.type === MessagesActionTypes.MESSAGES_LOAD) {
    setTimeout(() => {
      store.dispatch(messagesLoadSuccess(db.messages));
    }, 3000);
  }

  if (action.type === MessagesActionTypes.MESSAGES_LOAD) {
    setTimeout(() => {
      store.dispatch(settingsLoadSuccess(db.settings));
    }, 2000);
  }

  return next(action);
};