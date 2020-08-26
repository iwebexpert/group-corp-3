import React from 'react';
import {Message} from '../Message';
import { generate } from 'shortid';

import './Messages.scss';
import {Container, Row} from "react-bootstrap";

export const Messages: React.FC<MessageProps> = ({messages}) => {
    const messageView = messages.map((item) => <Message Author={item.Author} MessageText={item.MessageText} key={generate()}/>);

    return (
        <Container className="p-4 messages-block">
            <Row>
                {messageView}
            </Row>
        </Container>
    );
};
