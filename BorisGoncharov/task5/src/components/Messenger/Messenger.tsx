import React, { useState, useEffect, FC, useContext, useRef } from 'react';
import { generate } from 'shortid';
import './Messenger.scss';

import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import { Message } from '../Message';
import { AuthUser } from '../../context/AuthUser';

export type MessengerProps = {
  messages: Message[];
  onMessagesChange: (messages: Message[]) => void;
};

export const Messenger: FC<MessengerProps> = ({
  messages,
  onMessagesChange,
}) => {
  useEffect(() => {
    if (!messages.length) {
      return;
    }

    const { author, date } = messages[messages.length - 1];
    if (author !== 'Bot' && Date.now() - date.getTime() < 1000) {
      setIsTyping(true);

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
        setIsTyping(false);
        onMessagesChange(messages.concat(newMessage));
      }, 1500);
    }
  }, [messages]);

  const [isTyping, setIsTyping] = useState<boolean>(false);

  const user = useContext(AuthUser); // Fetch user from context
  let timer = useRef<number>(); // We mutate timer -> we use useRef

  const handleMessageSend = (text: string): void => {
    const newMessage: Message = {
      text,
      author: user,
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
