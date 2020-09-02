import React, {useState, useEffect, useContext} from 'react';
import {generate} from 'shortid';
import './Messenger.scss';
import {MessageField} from '../MessageField/MessageField';
import Messages from '../Messages/Messages';
import {Item, ItemWithId} from '../types/types';
import {ConfigAppContext} from '../App';
import {useParams} from 'react-router-dom';

export const Messenger: React.FC<{}> = () => {
    let {id} = useParams<any>();
    const [messages, setMessages] = useState<ItemWithId[]>([]);
    let st: any = null;
    const {addMessage, setting} = useContext(ConfigAppContext);
    const [paramId, setParamId] = useState<number>(id);

    const handleMessageSend = (message: Item, paramId: number) => {
        setParamId(paramId);
        clearTimeout(st);
        const newMessage: ItemWithId = {...message, id: generate()};
        setMessages(messages.concat([newMessage]));
        addMessage({...newMessage, chatId: +id});
    };

    useEffect(() => {
        if (!messages.length) {
            return;
        }
        const {author} = messages[messages.length - 1];
        if (author !== 'Bot' && (paramId === id)) {
            st = window.setTimeout(() => {
                const newMessage: ItemWithId = {
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

    useEffect(() => {
        setMessages(setting.Chats[id].messages);
    }, [id]);

    return (<div className='messenger'>
        <Messages items={messages}></Messages>
        <MessageField paramId={id} onSendHandler={handleMessageSend}></MessageField>
    </div>);
}
