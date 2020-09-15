import React, { FC } from 'react';
import { generate } from 'shortid';
import './Messenger.scss';

import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import { useParams } from 'react-router-dom';

export type MessengerProps = {
  messages: Message[];
  author: string;
  theme?: Theme;
  typingAuthor: string;
  onMessageSend: (message: Message) => void;
  onMessageClose: (id: string) => void;
};

export const Messenger: FC<MessengerProps> = ({
  messages,
  author,
  theme = 'light',
  typingAuthor,
  onMessageSend,
  onMessageClose,
}) => {
  // Active chat id
  let { chatId } = useParams<{ chatId: string }>();

  const handleMessageSend = (text: string): void => {
    const newMessage: Message = {
      text,
      author,
      id: generate(),
      date: new Date().toISOString(),
      closable: false,
      chatId,
    };

    onMessageSend(newMessage);
  };

  return (
    <>
      <MessageList
        items={messages}
        typingAuthor={typingAuthor}
        onMessageClose={onMessageClose}
        theme={theme}
      />
      <MessageForm onMessageSend={handleMessageSend} />
    </>
  );
};
