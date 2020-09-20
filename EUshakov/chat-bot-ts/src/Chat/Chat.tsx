import React, { useState, useEffect } from 'react';
import { MessageList } from '../MessageList/MessageList';
import { MessageForm, MessageRequest } from '../MessageForm/MessageForm';
import './Chat.scss';
import { MessageProps } from '../Message/Message';
import { Container, Col, Row } from 'react-bootstrap';

export type ChatState = {
    messages: MessageProps[],
    nextId: number
}
export const Chat: React.FC<{}> = () => {
    const initialState: ChatState = {
        messages: [
            { id: 0, text: 'Hello world!', author: 'AutoBot', timeStamp: new Date() },
            { id: 1, text: 'Hello Alice!', author: 'Magic User', timeStamp: new Date() }
        ],
        nextId: 2
    }

    const [chatState, setChatState] = useState<ChatState>(initialState);
    const autoAnswer = () => {
        setChatState({
            messages: [...chatState.messages, { id: chatState.nextId, text: 'This is auto answer', author: 'AutoBot', timeStamp: new Date() }],
            nextId: chatState.nextId + 1
        })
    }

    useEffect(() => {
        let timeoutHandler = setTimeout(() => {
            autoAnswer();
        }, 3000);
        return () => {
            clearInterval(timeoutHandler);
        }
    }, [chatState.messages.filter(m => m.author !== 'AutoBot').pop()]);

    const handleMessagePublish = (from: MessageRequest) => {
        const nextState = {
            ...chatState,
            messages: [...chatState.messages,
            {
                id: chatState.nextId,
                text: from.message,
                author: from.author,
                timeStamp: new Date()
            }],
            nextId: chatState.nextId + 1
        };
        setChatState(nextState);
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