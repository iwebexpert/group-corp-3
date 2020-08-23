import React, {useState, useEffect} from 'react';
import {generate} from 'shortid';

import './Messenger.scss';
import {MessageField} from '../MessageField/MessageField';
import Messages from '../Messages/Messages';
import {Item, ItemWithId} from '../types/types';

export const Messenger: React.FC<{}> = () => {
    const [messages, setMessages] = useState<ItemWithId[]>([]);
    let st: any =  null;

    const handleMessageSend = (message: Item) => {
        clearTimeout(st);
        const newMessage: ItemWithId = {...message, id: generate()};
        setMessages(messages.concat([newMessage]))
    };

    useEffect(() => {
        if (!messages.length) {
            return;
        }

        const {author} =  messages[messages.length - 1];
        if (author !== 'Bot') {
            st = window.setTimeout(() => {
                const newMessage: ItemWithId =  {
                    message: `Привет, ${author}! Это ответ бота`,
                    author: 'Bot',
                    id: generate()
                };
                setMessages(messages.concat([newMessage]));
            }, 2000);
        }

        return () => {
            if (st) {
                clearTimeout(st);
            }
        }
    }, [messages]);

    return (<div className='messenger'>
        <Messages items={messages}></Messages>
        <MessageField onSendHandler={handleMessageSend}></MessageField>
    </div>);
}
