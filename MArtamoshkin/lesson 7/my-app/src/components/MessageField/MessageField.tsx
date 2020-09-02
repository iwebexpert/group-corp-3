import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Image } from 'react-bootstrap';
import './MessageField.scss';
import { SettingsContext } from '../../contexts/SettingsContext';

const MessageField = (props: MessageItemProps) => {
    const { message, contactPerson } = props;
    const currentUser: User = useContext(UserContext);
    const { name }: Settings = useContext(SettingsContext);

    const isCurrentUser = message.author === currentUser.id;
    const messageClasses = !isCurrentUser ? 'chat' : 'chat chat-left';
    const author = isCurrentUser ? {...currentUser, name} : contactPerson;

    return <div className={messageClasses}>
        <div className="chat-avatar">
            <div className="avatar avatar-online">
                <Image src={author.avatar} alt="Avatar" rounded />
                <i></i>
            </div>
        </div>
        <div className="chat-body">
            <div className="chat-content">
                <b>{author.name}</b>
                <p>{message.text}</p>
                <time className="chat-time">{new Date(message.date).toLocaleTimeString('ru-RU')}</time>
            </div>
        </div>
    </div>;
};

export { MessageField };

