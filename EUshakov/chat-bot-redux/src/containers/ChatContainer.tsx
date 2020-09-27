import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../reducers';
import { chatsMessageSend } from '../actions/chats';

import { Chat } from '../Chat/Chat';
import { MessageRequest } from '../MessageForm/MessageForm';
import { Spinner } from 'react-bootstrap';

export const ChatContainer: React.FC<{}> = () => {
    const { chatId }: any = useParams();
    const selectedChatId = +chatId || 1;

    const dispatch = useDispatch();

    const isLoading = useSelector((state: AppState) => state.chats.loading);
    const chatState = useSelector((state: AppState) => state.chats.entries.find(chat => chat.id === selectedChatId) || state.chats.entries[0]);

    const handleMessagePublish = (from: MessageRequest) => {
        dispatch(chatsMessageSend(from, selectedChatId));
    }

    return isLoading
        ? <Spinner variant="success" animation="grow"></Spinner>
        : <Chat chatState={chatState} handleMessagePublish={handleMessagePublish} />
}