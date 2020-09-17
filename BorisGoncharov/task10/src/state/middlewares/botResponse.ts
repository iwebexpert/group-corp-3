import { Middleware } from 'redux';
import { generate } from 'shortid';
import { chatsResetTypingAuthor, chatsSetTypingAuthor, MessagesActionTypes, messagesAdd, MessagesAddAction } from '../actions';
import { AppState } from '../store';

const BOT = {
  id: '007213',
  name: 'Bot'
}

export const botResponseMiddleware: Middleware = store => next => action => {
  if (action.type === MessagesActionTypes.MESSAGES_ADD) {
    const { chatId, author } = (action as MessagesAddAction).payload;
    const typingAuthor = (store.getState() as AppState).chats.chats.find(chat => chat.id === chatId)?.typingAuthor;
    const botIsWriting = typingAuthor === BOT.name;

    if (author.id !== BOT.id && !botIsWriting) {
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
      }, 3000);
    }
  }

  return next(action);
};