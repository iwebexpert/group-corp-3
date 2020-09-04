import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Messenger } from '../components/Messenger';
import {
  messagesAdd,
  messagesDelete,
  messagesLoad,
} from '../state/messages/messagesActions';
import { AppState } from '../state/store';

export const MessengerContainer: React.FC<{}> = () => {
  let { chatId } = useParams<{ chatId: string }>();

  const dispatch = useDispatch();

  const messages = useSelector((state: AppState) => {
    const messages = state.messages.messages.filter(
      (message) => message.chatId === chatId
    );
    return messages ? messages : [];
  });

  useEffect(() => {
    dispatch(messagesLoad());
  }, [dispatch]);

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
    />
  );
};
