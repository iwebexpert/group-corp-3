import React, { useContext } from 'react';
import { AuthorizationContext } from '../Layout/AuthorizationContext';
import classNames from 'classnames';
import './Message.scss';
import { Col } from 'react-bootstrap';

export type MessageProps = {
    id: number;
    text: string;
    author: string;
    timeStamp: Date;
}
export const Message: React.FC<MessageProps> = ({ text, author, timeStamp }) => {
    const auth = useContext(AuthorizationContext);
    const ownersMessage = auth.userName === author;
    const classes = classNames('message', { owner: ownersMessage, guest: !ownersMessage, alignSelfEnd: ownersMessage });
    return <Col md={8}>
        <div className={classes}>
            <div className="message-text">{text}</div>
            <div className="message-author">{`by ${author} at ${timeStamp.toTimeString().split(' ')[0]}`}</div>
        </div>
    </Col>
}