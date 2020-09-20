import React, { useState, useEffect } from 'react';
import { MessageList } from '../MessageList/MessageList';
import { MessageForm, MessageRequest } from '../MessageForm/MessageForm';
import './Chat.scss';
import { MessageProps } from '../Message/Message';
import { Container, Col, Row } from 'react-bootstrap';
import { ChatState } from '../models/types';
import { useParams } from 'react-router-dom';

export type ChatProps = {
    chatsState: ChatState[];
    chatUpdated: (updatedChat: ChatState) => void
}
export const Chat: React.FC<ChatProps> = ({ chatsState, chatUpdated }) => {
    const { chatId } = useParams();
    const selectedChatId = +chatId || 1;
    const chatState = chatsState.find(chat => chat.id == selectedChatId) || chatsState[0];
    const handleMessagePublish = (from: MessageRequest) => {
        const nextId = chatState.messages.reduce((prev, message) => Math.max(prev, message.id), 0) + 1;
        const nextState: ChatState = {
            ...chatState,
            messages: [...chatState!.messages,
            {
                id: nextId,
                text: from.message,
                author: from.author,
                timeStamp: new Date()
            }],
        };
        chatUpdated(nextState);
    }

    return <Container className="d-flex flex-column chat">
        <Row className="flex-grow-1 message-list">
            <Col>
                <MessageList messages={chatState.messages} />
            </Col>
        </Row>
        <Row>
            <Col>
                <MessageForm messagePublished={handleMessagePublish} />
            </Col>
        </Row>

    </Container>
}