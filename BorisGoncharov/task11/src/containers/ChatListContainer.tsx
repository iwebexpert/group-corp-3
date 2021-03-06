import React, { FC } from 'react';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import { ChatList } from '../components/ChatList';
import { AppState } from '../state/store';
import { ChatsActions, chatsAdd, chatsDelete } from '../state/actions';
import { Dispatch } from 'redux';

type StateProps = {
  chats: Chat[];
};

type DispatchProps = {
  onChatAdd: (title: string) => void;
  onChatDelete: (id: string) => void;
};

type Props = StateProps & DispatchProps;

const ChatListContainer: FC<Props> = ({ chats, onChatAdd, onChatDelete }) => {
  return (
    <ChatList chats={chats} onChatAdd={onChatAdd} onChatDelete={onChatDelete} />
  );
};

const mapStateToProps = (state: AppState): StateProps => {
  return {
    chats: state.chats.chats,
  };
};

const mapDispathToProps = (dispatch: Dispatch<ChatsActions>): DispatchProps => {
  return {
    onChatAdd: (title: string) => {
      const newChatId = generate();
      dispatch(
        chatsAdd({
          id: newChatId,
          title,
          isUnread: false,
          typingAuthor: '',
        }) as any
      );
    },
    onChatDelete: (id: string) => dispatch(chatsDelete(id) as any),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ChatListContainer);
