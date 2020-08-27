import React from 'react';
import classNames from 'classnames';
import {Col, Container, Row} from "react-bootstrap";

import './Message.scss';


export const Message: React.FC<MessageData> = ({author, messageText}) => {
    const rowClasses = classNames({
        'justify-content-end': author === 'Бот',
        'justify-content-start': author !== 'Бот',
    });

    const classes = classNames('message', {
        'message-bot': author === 'Бот',
        'message-user': author !== 'Бот',
    });

    let messageContent;

    if (messageText === "") {
        messageContent = (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    } else {
        messageContent = (
            <>
                <b>{author}</b>&nbsp;
                <span>{messageText}</span>
            </>
        )
    }

    return (
        <Container>
            <Row className={rowClasses}>
                <Col md={5} className={classes}>
                    {messageContent}
                </Col>
            </Row>
        </Container>
    );
};
