import React from 'react';
import Alert from 'react-bootstrap/esm/Alert';
import { MessageEntity } from './entities';

type MessageProps = {
    message: MessageEntity
}

const Message: React.FC<MessageProps> = ({message}) => {
    return (
        <div className={`message ${message.bot ? " block-right" : ""}`}>
            <div>
                <Alert variant={message.bot ? "primary" : "success"}>
                    <Alert.Link href="#">{message.author}</Alert.Link>
                    <p className="m-0">{message.body}</p>
                </Alert>
            </div>
        </div>
    )
}

export default Message;