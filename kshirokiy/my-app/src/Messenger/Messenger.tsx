import React, {useState, useEffect, useContext} from 'react';
import {generate} from 'shortid';
import './Messenger.scss';
import {MessageField} from '../MessageField/MessageField';
import Messages from '../Messages/Messages';
import {Item, ItemWithId} from '../types/types';

type MessengerProps = {
    items: ItemWithId[];
    onSendHandler: (message: ItemWithId) => void;
    paramId: number;
    routeChange: boolean
};

export const Messenger: React.FC<MessengerProps> = ({items, onSendHandler, routeChange, paramId}) => {
    const handleMessageSendForm = (message: Item) => {
        const newMessage: ItemWithId = {...message, id: generate(), chatId: +paramId};
        onSendHandler(newMessage);
    };

    useEffect(() => {
        if (items.length) {
            const {author, chatId} = items[items.length - 1];

            if (author !== 'Bot') {
                const newMessage: ItemWithId = {
                    message: `Привет, ${author}! Это ответ бота`,
                    author: 'Bot',
                    id: generate(),
                    chatId: +paramId
                };
                onSendHandler(newMessage);
            }
        }
    }, [items]);

    useEffect(() => {
    }, []);

    return (<div className='messenger'>
        <Messages items={items}></Messages>
        <MessageField paramId={paramId} onSendHandler={handleMessageSendForm}></MessageField>
    </div>);
}
