import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Messenger } from '../components/Messenger';
import { AppState } from '../state/store';
import { MessagesActions, messagesAdd, messagesDelete } from '../state/actions';
import { Dispatch } from 'redux';

type StateProps = {
  messages: Message[];
  theme: Theme;
  user: User;
  typingAuthor: string;
};

type DispatchProps = {
  onMessageSend: (message: Message) => void;
  onMessageClose: (id: string) => void;
};

type Props = StateProps & DispatchProps;

const MessengerContainer: FC<Props> = ({
  messages,
  user,
  typingAuthor,
  theme,
  onMessageSend,
  onMessageClose,
}) => {
  return (
    <Messenger
      messages={messages}
      user={user}
      typingAuthor={typingAuthor}
      theme={theme}
      onMessageSend={onMessageSend}
      onMessageClose={onMessageClose}
    />
  );
};

const mapStateToProps = (state: AppState): StateProps => {
  const chatId = state.router.location.pathname.substr(1);
  const activeChat = state.chats.chats.find((chat) => chat.id === chatId);

  return {
    messages: state.messages.messages,
    theme: state.settings.settings.theme,
    user: state.settings.settings.user,
    typingAuthor: activeChat?.typingAuthor || '',
  };
};

const mapDispathToProps = (
  dispatch: Dispatch<MessagesActions>
): DispatchProps => {
  return {
    onMessageSend: (message: Message) => dispatch(messagesAdd(message) as any),
    onMessageClose: (id: string) => dispatch(messagesDelete(id) as any),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(MessengerContainer);
