import React, { FC, useEffect, useRef } from 'react';
import { Col } from 'react-bootstrap';
import { Message } from '../Message';
import './MessageList.scss';

type MessageListProps = {
  items: Message[];
  isTyping: boolean;
  onMessageClose: (id: string) => () => void;
};

export const MessageList: FC<MessageListProps> = ({
  items,
  isTyping,
  onMessageClose,
}) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blockRef.current) {
      blockRef.current.scrollTop = blockRef.current.scrollHeight;
    }
  });

  return (
    <Col ref={blockRef} className="message-list">
      {items.map((item) => (
        <Message {...item} onMessageClose={onMessageClose} key={item.id} />
      ))}
      {isTyping && <div className="text-secondary">Печатает...</div>}
    </Col>
  );
};
