import React from 'react';
import {Message} from './Message';
import {Container, Row} from "react-bootstrap";

import './Messages.scss';

export const Messages: React.FC<MessageProps> = ({messages}) => {
    const messageView = messages.map((item) =>
        <Message
            chatId={item.chatId}
            key={item.id}
            id={item.id}
            author={item.author}
            messageText={item.messageText}
            read={item.read}
        />);

    return (
        <Container className="p-4 messages-block">
            <Row>
                {messageView}
            </Row>
        </Container>
    );
};
