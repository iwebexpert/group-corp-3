import React, { FC, useEffect, useRef } from 'react';
import { Col, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Message } from '../Message';
import classNames from 'classnames';
import './MessageList.scss';

type MessageListProps = {
  items: Message[];
  isTyping: boolean;
  theme?: Theme;
  onMessageClose: (id: string) => void;
};

export const MessageList: FC<MessageListProps> = ({
  items,
  isTyping,
  theme = 'light',
  onMessageClose,
}) => {
  const { t } = useTranslation();
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blockRef.current) {
      blockRef.current.scrollTop = blockRef.current.scrollHeight;
    }
  });

  const classes = classNames('message-list', {
    'bg-white': theme === 'light',
    'bg-secondary': theme === 'dark',
  });

  return (
    <Col ref={blockRef} className={classes}>
      {items.map((item) => (
        <Message {...item} onMessageClose={onMessageClose} key={item.id} />
      ))}
      {isTyping && (
        <div className="text-secondary">
          {t('WRITING')}...&nbsp;
          <Spinner animation="border" variant="secondary" size="sm" />
        </div>
      )}
    </Col>
  );
};
