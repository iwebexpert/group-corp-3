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
  name: string;
};

type DispatchProps = {
  onMessageSend: (message: Message) => void;
  onMessageClose: (id: string) => void;
};

type Props = StateProps & DispatchProps & MessengerContainerProps;

const MessengerContainer: FC<Props> = ({
  messages,
  theme,
  name,
  onMessageSend,
  onMessageClose,
}) => {
  return (
    <Messenger
      onMessageSend={onMessageSend}
      onMessageClose={onMessageClose}
      messages={messages}
      author={name}
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

  return {
    messages: messages ? messages : [],
    theme: state.settings.settings.theme,
    name: state.settings.settings.name,
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
