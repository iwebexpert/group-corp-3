import React, { useRef, useEffect } from 'react';
import { MessageEntity } from './entities';
import Message from './Message';
import './Messenger.scss';

type MessageListProps = {
    messages: MessageEntity[]
}

const MessageList: React.FC<MessageListProps> = ({messages}) => {
    const messageListBlock = useRef<HTMLInputElement>(null);

    useEffect(() => messageListBlock?.current?.scrollIntoView({ behavior: 'smooth' }), [messages])

    return (
        <div className="message-list">
            {messages.map((message, key) => <Message message={message} key={key}/>)}
            <div ref={messageListBlock}></div>
        </div>
    )
}

export default MessageList;