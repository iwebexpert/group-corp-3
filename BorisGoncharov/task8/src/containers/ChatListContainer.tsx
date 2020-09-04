import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChatList } from '../components/ChatList';
import { chatsLoad } from '../state/chats/chatsActions';
import { AppState } from '../state/store';

export const ChatListContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const chats = useSelector((state: AppState) => state.chats.chats);

  useEffect(() => {
    dispatch(chatsLoad());
  }, [dispatch]);

  return <ChatList chats={chats} />;
};
