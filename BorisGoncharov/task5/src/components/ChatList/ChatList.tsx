import React, { FC } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Message } from '../Message';
import './ChatList.scss';

export type Chat = {
  title: string;
  id: string;
  messages: Message[];
};

export type ChatListProps = {
  chats: Chat[];
  activeChatId: string;
  onChatSelect: (id: string) => () => void;
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
