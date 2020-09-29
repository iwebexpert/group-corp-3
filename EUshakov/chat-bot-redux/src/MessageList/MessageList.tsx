import React, { useContext } from 'react';
import './MessageList.scss';
import { MessageProps, Message } from '../Message/Message';
import { Row, Container } from 'react-bootstrap';
import { AuthorizationContext } from '../Layout/AuthorizationContext';
import classNames from 'classnames';

export type MessageListProps = {
    messages: MessageProps[]
}

export const MessageList: React.FC<MessageListProps> = ({ messages }: MessageListProps) => {
    const auth = useContext(AuthorizationContext);

    return <Container >
        {messages.map(m => {
            const ownersMessage = auth.userName === m.author;
            const classes = classNames('', { "justify-content-end": ownersMessage });
            return <Row className={classes} key={m.id}>
                <Message {...m} />
            </Row>
        })}
    </Container>
}