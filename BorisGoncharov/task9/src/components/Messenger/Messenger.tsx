import React, { useEffect, FC, useRef, useState } from 'react';
import { generate } from 'shortid';
import './Messenger.scss';

import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export type MessengerProps = {
  messages: Message[];
  author: string;
  theme?: Theme;
  onMessageSend: (message: Message) => void;
  onMessageClose: (id: string) => void;
};

export const Messenger: FC<MessengerProps> = ({
  messages,
  author,
  theme = 'light',
  onMessageSend,
  onMessageClose,
}) => {
  const { t } = useTranslation();

  // Active chat id
  let { chatId } = useParams<{ chatId: string }>();

  // We mutate timer -> we use useRef
  let timer = useRef<number>();

  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    setIsTyping(false);
    clearTimeout(timer.current);
  }, [chatId]);

  useEffect(() => {
    if (!messages.length) {
      return;
    }

    const { author, date, isBot } = messages[messages.length - 1];
    if (!isBot && Date.now() - new Date(date).getTime() < 100) {
      setIsTyping(true);

      // We clear timeout if user posted several messages within 1.5s
      clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        const newMessage: Message = {
          text: t('BOT_MESSAGE', { author }),
          author: 'Bot',
          id: generate(),
          date: new Date().toISOString(),
          closable: true,
          isBot: true,
          chatId,
        };
        setIsTyping(false);
        onMessageSend(newMessage);
      }, 1500);
    }
  }, [messages, chatId, onMessageSend, t]); // Need to include callback because of warning

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
        isTyping={isTyping}
        onMessageClose={onMessageClose}
        theme={theme}
      />
      <MessageForm onMessageSend={handleMessageSend} />
    </>
  );
};
