import { Middleware } from 'redux';
import { generate } from 'shortid';
import { chatsResetTypingAuthor, chatsSetTypingAuthor, MessagesActionTypes, messagesAdd, MessagesAddAction } from '../actions';

const BOT = {
  id: '007213',
  name: 'Bot'
}

export const botResponseMiddleware: Middleware = store => next => action => {
  if (action.type === MessagesActionTypes.MESSAGES_ADD) {
    const { chatId, author } = (action as MessagesAddAction).payload;

    if (author.id !== BOT.id) {
      store.dispatch(chatsSetTypingAuthor({ chatId, author: BOT.name }));

      setTimeout(() => {
        store.dispatch(messagesAdd({
          id: generate(),
          chatId,
          author: BOT,
          text: `Hi, ${author.name}! This is bot...`,
          closable: true,
          date: new Date().toISOString(),
        }));

        store.dispatch(chatsResetTypingAuthor(chatId));
      }, 2000);
    }
  }

  return next(action);
};