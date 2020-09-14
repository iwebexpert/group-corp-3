import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'shortid';
import { ChatList } from '../components/ChatList';
import { AppState } from '../state/store';
import { chatsAdd, chatsDelete } from '../state/actions';

export const ChatListContainer: FC<{}> = () => {
  const dispatch = useDispatch();

  const chats = useSelector((state: AppState) => state.chats.chats);

  const chatAddHandler = (title: string) => {
    dispatch(
      chatsAdd({
        id: generate(),
        title,
      })
    );
  };

  const chatDeleteHandler = (id: string) => {
    dispatch(chatsDelete(id));
  };

  return (
    <ChatList
      chats={chats}
      onChatAdd={chatAddHandler}
      onChatDelete={chatDeleteHandler}
    />
  );
};
