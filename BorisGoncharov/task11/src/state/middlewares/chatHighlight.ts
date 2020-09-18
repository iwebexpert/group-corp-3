import { Middleware } from 'redux';
import { chatsMarkRead, chatsMarkUnread, MessagesActionTypes, MessagesAddSuccessAction } from '../actions';
import { LOCATION_CHANGE } from 'connected-react-router';

export const chatHighlightMiddleware: Middleware = store => next => action => {
  if (action.type === MessagesActionTypes.MESSAGES_ADD_SUCCESS) {
    const { chatId } = (action as MessagesAddSuccessAction).payload;
    const activeChatId = store.getState().router.location.pathname.substring(1);

    // Need to highlight unread messages in chat which is not active
    if (chatId !== activeChatId) {
      store.dispatch(chatsMarkUnread(chatId));
    }
  }

  if (action.type === LOCATION_CHANGE) {
    const activeChatId = store.getState().router.location.pathname.substring(1);
    store.dispatch(chatsMarkRead(activeChatId));
  }

  return next(action);
};