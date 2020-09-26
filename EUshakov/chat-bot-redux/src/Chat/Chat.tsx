import React from 'react';
import { MessageList } from '../MessageList/MessageList';
import { MessageForm, MessageRequest } from '../MessageForm/MessageForm';
import './Chat.scss';
import { Container, Col, Row } from 'react-bootstrap';
import { ChatState } from '../models/types';

export type ChatProps = {
    chatState: ChatState;
    handleMessagePublish: (message: MessageRequest) => void
}
export const Chat: React.FC<ChatProps> = ({ chatState, handleMessagePublish }) => {

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