import React, { FC, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Chat } from '../components/Chat';
import { AppState } from '../state/store';
import { chatsLoad, messagesLoad, settingsLoad } from '../state/actions';

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
