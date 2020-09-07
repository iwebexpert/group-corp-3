import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ChatList } from '../components/ChatList';
import { AppState } from '../state/store';

export const ChatListContainer: FC<{}> = () => {
  const chats = useSelector((state: AppState) => state.chats.chats);

  return <ChatList chats={chats} />;
};
