import { Middleware } from 'redux';
import { chatsMarkUnread, MessagesActionTypes, MessagesAddAction } from '../actions';

export const chatHighlightMiddleware: Middleware = store => next => action => {
  if (action.type === MessagesActionTypes.MESSAGES_ADD) {
    const { chatId } = (action as MessagesAddAction).payload;
    const activeChatId = store.getState().router.location.pathname.substring(1);

    // Need to highlight unread messages in chat which is not active
    if (chatId !== activeChatId) {
      store.dispatch(chatsMarkUnread(chatId));
    }
  }

  return next(action);
};