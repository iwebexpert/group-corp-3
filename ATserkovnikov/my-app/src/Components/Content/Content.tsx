import React from 'react';
import {ChatList} from '../ChatList';
import {MessageList} from '../MessageList';
import {Col, Container, Row} from "react-bootstrap";

import './Content.scss'

export class Content extends React.Component {
    render() {
        const messages: MessagesListProps = {authors: [], messages: []};

        return (
            <Container>
                <Row>
                    <Col md={4} className="p-0 chat-block">
                        <ChatList/>
                    </Col>
                    <Col md={8} className="p-0">
                        <MessageList authors={messages.authors} messages={messages.messages} />
                    </Col>
                </Row>
            </Container>
        );
    }
}
