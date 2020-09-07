import React from 'react';
import { MessageEntity } from './entities';

type MessageProps = {
    message: MessageEntity
}

const Message: React.FC<MessageProps> = ({message}) => {
    return (
        <div className={`message ${message.bot ? " block-right" : ""}`}>
            <div className={`message-area ${message.bot ? "bot-message" : "self-message"}`}>
                <h4 className="message-author">{message.author}</h4>
                <h4 className="message-body">{message.body}</h4>
            </div>
        </div>
    )
}

export default Message;