import React, { useEffect, FC, useContext, useRef } from 'react';
import { generate } from 'shortid';
import './Messenger.scss';

import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import { Message } from '../Message';
import { SettingsContext } from '../../context/Settings';

export type MessengerProps = {
  messages: Message[];
  isTyping: boolean;
  onMessagesChange: (messages: Message[]) => void;
  onIsTypingChange: (isTyping: boolean) => void;
};

export const Messenger: FC<MessengerProps> = ({
  messages,
  isTyping,
  onMessagesChange,
  onIsTypingChange,
}) => {
  const { author } = useContext(SettingsContext); // Fetch author from context
  let timer = useRef<number>(); // We mutate timer -> we use useRef

  useEffect(() => {
    if (!messages.length) {
      return;
    }

    const { author, date } = messages[messages.length - 1];
    if (author !== 'Bot' && Date.now() - date.getTime() < 1000) {
      onIsTypingChange(true);

      // We clear timeout if user posted several messages within 1.5s
      clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        const newMessage: Message = {
          text: `Hello, ${author}! It's me, Bot!`,
          author: 'Bot',
          id: generate(),
          date: new Date(),
          closable: true,
        };
        onIsTypingChange(false);
        onMessagesChange(messages.concat(newMessage));
      }, 1500);
    }
  }, [messages, onIsTypingChange, onMessagesChange]); // Need to include callback because of warning

  const handleMessageSend = (text: string): void => {
    const newMessage: Message = {
      text,
      author: author,
      id: generate(),
      date: new Date(),
      closable: false,
    };

    onMessagesChange(messages.concat(newMessage));
  };

  const handleMessageClose = (id: string) => (): void => {
    onMessagesChange(messages.filter((message) => message.id !== id));
  };

  return (
    <>
      <MessageList
        items={messages}
        isTyping={isTyping}
        onMessageClose={handleMessageClose}
      />
      <MessageForm onMessageSend={handleMessageSend} />
    </>
  );
};
