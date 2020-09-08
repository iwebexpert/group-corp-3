import React, { FC, useRef } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import './ChatList.scss';

export type ChatListProps = {
  chats: Chat[];
  onChatAdd: (title: string) => void;
};

export const ChatList: FC<ChatListProps> = ({ chats, onChatAdd }) => {
  let { chatId } = useParams<{ chatId: string }>();
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' && inputRef?.current) {
      onChatAdd(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <ListGroup variant="flush" className="bg-dark mb-2">
        {chats?.map((chat) => {
          return (
            <ListGroup.Item
              as={Link}
              to={`/${chat.id}`}
              action
              variant="dark"
              key={chat.id}
              active={chat.id === chatId}
            >
              {chat.title}
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      <Form.Group>
        <Form.Control
          ref={inputRef}
          className="rounded-0"
          type="text"
          placeholder={t('NEW_CHAT')}
          onKeyPress={handleKeyPress}
        />
      </Form.Group>
    </>
  );
};
