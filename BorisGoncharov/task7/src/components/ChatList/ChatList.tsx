import React, { FC } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ChatList.scss';

export type ChatListProps = {
  chats: Chat[];
  activeChatId: string;
  onChatSelect: (chatId: string) => () => void;
};

export const ChatList: FC<ChatListProps> = ({
  chats,
  activeChatId,
  onChatSelect,
}) => {
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
            active={chat.id === activeChatId}
            onClick={onChatSelect(chat.id)}
          >
            {chat.title}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
