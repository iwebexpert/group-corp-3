import React, { FC } from 'react';
import './ChatList.scss';

export type ChatListProps = {
  chats?: {
    title: string;
    id: string;
  }[];
};

export const ChatList: FC<ChatListProps> = ({ chats }) => {
  return (
    <div className="bg-secondary h-100 p-3 text-white">
      {chats?.map((chat) => {
        return (
          <h5 className="mb-3" key={chat.id}>
            {chat.title}
          </h5>
        );
      })}
    </div>
  );
};
