import React, { FC, useContext, useEffect, useRef } from 'react';
import { Col, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { SettingsContext } from '../../contexts/SettingsContext';
import { Message } from '../Message';
import classNames from 'classnames';
import './MessageList.scss';

type MessageListProps = {
  items: Message[];
  isTyping: boolean;
  onMessageClose: (id: string) => void;
};

export const MessageList: FC<MessageListProps> = ({
  items,
  isTyping,
  onMessageClose,
}) => {
  const { t } = useTranslation();
  const blockRef = useRef<HTMLDivElement>(null);

  const { theme } = useContext(SettingsContext);

  useEffect(() => {
    if (blockRef.current) {
      blockRef.current.scrollTop = blockRef.current.scrollHeight;
    }
  });

  const classes = classNames('message-list', {
    'bg-white': theme === 'Light',
    'bg-secondary': theme === 'Dark',
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
