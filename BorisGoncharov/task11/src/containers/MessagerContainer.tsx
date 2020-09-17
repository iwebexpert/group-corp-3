import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Messenger } from '../components/Messenger';
import { AppState } from '../state/store';
import { MessagesActions, messagesAdd, messagesDelete } from '../state/actions';
import { Dispatch } from 'redux';
import { withRouter } from 'react-router';

type MessengerContainerProps = RouteComponentProps<{ chatId: string }>;

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

type Props = StateProps & DispatchProps & MessengerContainerProps;

const MessengerContainer: FC<Props> = ({
  messages,
  theme,
  user,
  typingAuthor,
  onMessageSend,
  onMessageClose,
}) => {
  return (
    <Messenger
      onMessageSend={onMessageSend}
      onMessageClose={onMessageClose}
      messages={messages}
      user={user}
      typingAuthor={typingAuthor}
      theme={theme}
    />
  );
};

const mapStateToProps = (
  state: AppState,
  ownProps: MessengerContainerProps
): StateProps => {
  const chatId = ownProps.match.params.chatId;

  // Filter messages by chatId
  const messages = state.messages.messages.filter(
    (message) => message.chatId === chatId
  );

  const chat = state.chats.chats.find((chat) => chat.id === chatId);

  return {
    messages: messages ? messages : [],
    theme: state.settings.settings.theme,
    user: state.settings.settings.user,
    typingAuthor: chat?.typingAuthor || '',
  };
};

const mapDispathToProps = (
  dispatch: Dispatch<MessagesActions>
): DispatchProps => {
  return {
    onMessageSend: (message: Message) => dispatch(messagesAdd(message)),
    onMessageClose: (id: string) => dispatch(messagesDelete(id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(MessengerContainer)
);
