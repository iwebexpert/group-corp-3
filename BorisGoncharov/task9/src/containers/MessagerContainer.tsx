import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Messenger } from '../components/Messenger';
import { AppState } from '../state/store';
import { messagesAdd, messagesDelete } from '../state/actions';

export const MessengerContainer: FC<{}> = () => {
  let { chatId } = useParams<{ chatId: string }>();

  const dispatch = useDispatch();

  const { theme, name } = useSelector(
    (state: AppState) => state.settings.settings
  );
  const messages = useSelector((state: AppState) => {
    const messages = state.messages.messages.filter(
      (message) => message.chatId === chatId
    );
    return messages ? messages : [];
  });

  const handleMessageSend = (message: Message) => {
    dispatch(messagesAdd(message));
  };

  const handleMessageClose = (id: string) => {
    dispatch(messagesDelete(id));
  };

  return (
    <Messenger
      onMessageSend={handleMessageSend}
      onMessageClose={handleMessageClose}
      messages={messages}
      author={name}
      theme={theme}
    />
  );
};
