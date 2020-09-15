import React, { FC, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
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

type StateProps = {
  chatsLoading: boolean;
  messagesLoading: boolean;
  theme: Theme;
};

type Props = StateProps;

const ChatContainer: FC<Props> = ({ chatsLoading, messagesLoading, theme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load data
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

const mapStateToProps = (state: AppState): StateProps => {
  return {
    chatsLoading: state.chats.loading,
    messagesLoading: state.messages.loading,
    theme: state.settings.settings.theme,
  };
};

export default connect(mapStateToProps)(ChatContainer);
