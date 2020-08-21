import React, { useState, useEffect, FC, useContext, useRef } from 'react';
import { generate } from 'shortid';
import './Messenger.scss';

import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import { MessageProps } from '../Message';
import { AuthUser } from '../../context/AuthUser';

export const Messenger: FC<{}> = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Fetch user from context
  const user = useContext(AuthUser);
  let timer = useRef<number>();

  const handleMessageSend = (text: string): void => {
    const newMessage: MessageProps = {
      text,
      author: user,
      id: generate(),
    };
    setMessages(messages.concat(newMessage));
  };

  useEffect(() => {
    if (!messages.length) {
      return;
    }

    const { author } = messages[messages.length - 1];
    if (author !== 'Bot') {
      setIsTyping(true);

      clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        const newMessage: MessageProps = {
          text: `Hello, ${author}! It's me, Bot!`,
          author: 'Bot',
          id: generate(),
        };
        setIsTyping(false);
        setMessages(messages.concat(newMessage));
      }, 1500);
    }
  }, [messages]);

  return (
    <>
      <MessageList items={messages} isTyping={isTyping} />
      <MessageForm onSendHandler={handleMessageSend} />
    </>
  );
};
