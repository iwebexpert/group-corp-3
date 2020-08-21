import React, { FC, useEffect, useRef } from 'react';

import { Message, MessageProps } from '../Message';
import './MessageList.scss';

type MessageListProps = {
  items: MessageProps[];
  isTyping: boolean;
};

export const MessageList: FC<MessageListProps> = ({ items, isTyping }) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blockRef.current) {
      blockRef.current.scrollTop = blockRef.current.scrollHeight;
    }
  });

  return (
    <div ref={blockRef} className="message-list p-3">
      {items.map((item) => (
        <Message {...item} key={item.id} />
      ))}
      {isTyping && <div className="text-secondary">Печатает...</div>}
    </div>
  );
};
