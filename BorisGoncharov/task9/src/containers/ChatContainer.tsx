import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Chat } from '../components/Chat';
import { AppState } from '../state/store';
import {
  chatsLoad,
  chatsLoadSuccess,
  messagesLoad,
  messagesLoadSuccess,
  settingsLoad,
  settingsLoadSuccess,
} from '../state/actions';
import * as db from '../db.json';

export const ChatContainer: FC<{}> = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: AppState) => state.settings.settings.theme);
  const chatsLoading = useSelector((state: AppState) => state.chats.loading);
  const messagesLoading = useSelector(
    (state: AppState) => state.messages.loading
  );

  useEffect(() => {
    dispatch(chatsLoad());
    dispatch(messagesLoad());
    dispatch(settingsLoad());

    // Emulating different loading speed
    setTimeout(() => {
      dispatch(chatsLoadSuccess(db.chats));
    }, 2000);

    setTimeout(() => {
      dispatch(messagesLoadSuccess(db.messages));
    }, 3000);

    setTimeout(() => {
      dispatch(settingsLoadSuccess(db.settings));
    }, 2000);
  }, [dispatch]);

  return (
    <Chat
      chatsLoading={chatsLoading}
      messagesLoading={messagesLoading}
      theme={theme}
    />
  );
};
