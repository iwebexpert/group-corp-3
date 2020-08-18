import React, { useContext } from 'react';
import { UserContext } from '../common/UserContext';

const MessageItem = (props: MessageItemProps) => {
    const { message } = props;
    const currentUser: User = useContext(UserContext);
    const messageClasses = message.author.id !== currentUser.id ? 'chat' : 'chat chat-left';

    return <div className={messageClasses}>
        <div className="chat-avatar">
            <a className="avatar avatar-online" href="#">
                <img src={message.author.avatar} alt="Avatar" />
                <i></i>
            </a>
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

export { MessageItem as Message };

