import React from 'react';
import classNames from 'classnames';
import {Col, Container, Row} from "react-bootstrap";

import './Message.scss';


export const Message: React.FC<MessageData> = ({Author, MessageText}) => {
    const rowClasses = classNames({
        'justify-content-end': Author === 'Бот',
        'justify-content-start': Author !== 'Бот',
    });

    const classes = classNames('message', {
        'message-bot': Author === 'Бот',
        'message-user': Author !== 'Бот',
    });

    return (
        <Container>
            <Row className={rowClasses}>
                <Col md={5} className={classes}>
                    <b>{Author}</b>&nbsp;
                    <span>{MessageText}</span>
                </Col>
            </Row>
        </Container>);
};
