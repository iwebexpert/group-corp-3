import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import './MessageField.scss';

const MessageField = (props: MessageItemProps) => {
    const { message } = props;
    const currentUser: User = useContext(UserContext);
    const messageClasses = message.author.id !== currentUser.id ? 'chat' : 'chat chat-left';

    return <div className={messageClasses}>
        <div className="chat-avatar">
            <div className="avatar avatar-online">
                <img src={message.author.avatar} alt="Avatar" />
                <i></i>
            </div>
        </div>
        <div className="chat-body">
            <div className="chat-content">
                <b>{message.author.name}</b>
                <p>{message.text}</p>
                <time className="chat-time">{message.date.toLocaleTimeString('ru-RU')}</time>
            </div>
        </div>
    </div>;
};

export { MessageField };

