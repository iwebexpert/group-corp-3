import React, { FC } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ChatList.scss';

export type ChatListProps = {
  chats: Chat[];
};

export const ChatList: FC<ChatListProps> = ({ chats }) => {
  let { chatId } = useParams<{ chatId: string }>();

  return (
    <ListGroup variant="flush" className="bg-dark">
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
  );
};
