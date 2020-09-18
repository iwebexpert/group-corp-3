import { Middleware } from 'redux';
import { generate } from 'shortid';
import { chatsResetTypingAuthor, chatsSetTypingAuthor, MessagesActionTypes, messagesAdd, MessagesAddSuccessAction } from '../actions';
import { AppState } from '../store';

const BOT = {
  id: '007213',
  name: 'Bot'
}

export const botResponseMiddleware: Middleware = store => next => action => {
  if (action.type === MessagesActionTypes.MESSAGES_ADD_SUCCESS) {
    const { chatId, authorId, authorName } = (action as MessagesAddSuccessAction).payload;
    const typingAuthor = (store.getState() as AppState).chats.chats.find(chat => chat.id === chatId)?.typingAuthor;
    const botIsWriting = typingAuthor === BOT.name;

    if (authorId !== BOT.id && !botIsWriting) {
      store.dispatch(chatsSetTypingAuthor({ chatId, author: BOT.name }));

      setTimeout(() => {
        store.dispatch(messagesAdd({
          id: generate(),
          chatId,
          authorName: BOT.name,
          authorId: BOT.id,
          text: `Hi, ${authorName}! This is ${BOT.name}...`,
          closable: true,
          date: new Date().toISOString(),
        }) as any);

        store.dispatch(chatsResetTypingAuthor(chatId));
      }, 3000);
    }
  }

  return next(action);
};