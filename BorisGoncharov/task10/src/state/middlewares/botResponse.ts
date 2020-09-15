import { Middleware } from 'redux';
import { generate } from 'shortid';
import { chatsResetTypingAuthor, chatsSetTypingAuthor, MessagesActionTypes, messagesAdd, MessagesAddAction } from '../actions';

const BOT_NAME = 'Bot';

export const botResponseMiddleware: Middleware = store => next => action => {
  if (action.type === MessagesActionTypes.MESSAGES_ADD) {
    const { chatId, author } = (action as MessagesAddAction).payload;

    if (author !== BOT_NAME) {
      store.dispatch(chatsSetTypingAuthor({ chatId, author: BOT_NAME }));

      setTimeout(() => {
        store.dispatch(messagesAdd({
          id: generate(),
          chatId,
          author: BOT_NAME,
          text: `Hi, ${author}! This is bot...`,
          closable: true,
          date: new Date().toISOString(),
        }));

        store.dispatch(chatsResetTypingAuthor(chatId));
      }, 2000);
    }
  }

  return next(action);
};