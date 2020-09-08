import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'shortid';
import { ChatList } from '../components/ChatList';
import { chatsAdd } from '../state/chats/chatsActions';
import { AppState } from '../state/store';

export const ChatListContainer: FC<{}> = () => {
  const dispatch = useDispatch();

  const chats = useSelector((state: AppState) => state.chats.chats);

  const chatAddHandler = (title: string) => {
    dispatch(
      chatsAdd({
        title,
        id: generate(),
      })
    );
  };

  return <ChatList chats={chats} onChatAdd={chatAddHandler} />;
};
