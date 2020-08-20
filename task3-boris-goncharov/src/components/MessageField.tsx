import React, { useEffect, useRef, useState } from 'react';
import { Message } from './Message';

export const MessageField: React.FC<{}> = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const textRef = useRef<HTMLTextAreaElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  // Need use ref to use this valiable in hooks
  const timerRef = useRef<number | undefined>();

  const handleSubmit = () => {
    if (textRef.current && authorRef.current) {
      const newMessage: MessageProps = {
        text: textRef.current.value || '',
        author: authorRef.current.value || '',
      };

      textRef.current.value = '';
      authorRef.current.value = '';
      setMessages([newMessage, ...messages]);
    }
  };

  // Set timeout on new message
  useEffect(() => {
    // Do nothing when timer is already set
    // Or empty arr
    // Or last author was bot
    if (
      timerRef.current ||
      messages.length === 0 ||
      messages[0].author === 'Bot'
    ) {
      return;
    }

    timerRef.current = window.setTimeout(() => {
      const botMessage: MessageProps = {
        text: 'Hello, ' + messages[0].author,
        author: 'Bot',
      };

      setMessages([botMessage, ...messages]);
      timerRef.current = undefined;
    }, 1000);
  }, [messages]);

  // Clear all timeouts
  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <>
      <div>
        {messages?.map((message) => (
          <Message text={message.text} author={message.author} />
        ))}
      </div>

      <hr />

      <div>
        <label>Text</label>
        <div>
          <textarea ref={textRef}></textarea>
        </div>
      </div>

      <div>
        <label>Author</label>
        <div>
          <input ref={authorRef} />
        </div>
      </div>

      <button onClick={handleSubmit}>Отправить</button>
    </>
  );
};
