import React, { FC } from 'react';
import { generate } from 'shortid';
import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import { useParams } from 'react-router-dom';
import './Messenger.scss';

export type MessengerProps = {
  messages: Message[];
  user: User;
  theme?: Theme;
  typingAuthor: string;
  onMessageSend: (message: Message) => void;
  onMessageClose: (id: string) => void;
};

export const Messenger: FC<MessengerProps> = ({
  messages,
  user,
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
      authorId: user.id,
      authorName: user.name,
      id: generate(),
      date: new Date().toISOString(),
      closable: true,
      chatId,
      sentOnServer: false,
    };

    onMessageSend(newMessage);
  };

  return (
    <>
      <MessageList
        items={messages}
        user={user}
        typingAuthor={typingAuthor}
        onMessageClose={onMessageClose}
        theme={theme}
      />
      <MessageForm onMessageSend={handleMessageSend} />
    </>
  );
};
