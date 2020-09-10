import React, { FC, useRef } from 'react';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
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
    if (event.key === 'Enter' && inputRef?.current?.value) {
      onChatAdd(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  const handleButtonClick = (): void => {
    if (inputRef?.current?.value) {
      onChatAdd(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <Col className="chat-list__list bg-dark">
        <ListGroup variant="flush">
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
      </Col>

      <Row className="m-0 p-3 flex-nowrap align-items-center">
        <Form.Control
          className="w-100 mr-3"
          ref={inputRef}
          type="text"
          placeholder={t('NEW_CHAT')}
          onKeyPress={handleKeyPress}
        />
        <BsPlusCircle
          className="chat-list__icon-add"
          onClick={handleButtonClick}
        />
      </Row>
    </>
  );
};
