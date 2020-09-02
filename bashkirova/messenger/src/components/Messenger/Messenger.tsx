import React, {useState, useEffect} from 'react';
import {generate} from 'shortid';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';
import {MessageProps, MessageWithId} from '../Message';

import './Messenger.css'

export const Messenger: React.FC<{}> = () => {
    const [messages, setMessages] = useState<MessageWithId[]>([]);

    const handleMessageSend = (message: MessageProps) => {
        const newMessage: MessageWithId = {...message, id: generate()};
        setMessages([newMessage].concat(messages));
    };

    useEffect(() => {
        if (!messages.length) {
            return;
        }

        const {author} = messages[messages.length - 1];
        if (author !== 'Bot') {
            setTimeout(() => {
                const newMessage: MessageWithId = {text: `Hello, ${author}!`, author: 'Bot', id: generate()};
                setMessages(messages.concat([newMessage]));
            }, 1500);
        }

    }, [messages]);

    return (<div className="massenger">
        <div className="chat"><MessageList items={messages}/></div>
        <MessageForm onSendHandler={handleMessageSend}/>
    </div>);
}