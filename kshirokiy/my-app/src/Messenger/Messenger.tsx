import React, {useState, useEffect, useContext} from 'react';
import {generate} from 'shortid';
import './Messenger.scss';
import {MessageField} from '../MessageField/MessageField';
import Messages from '../Messages/Messages';
import {Item, ItemWithId} from '../types/types';
import {Spinner} from 'react-bootstrap';

type MessengerProps = {
    items: ItemWithId[];
    onSendHandler: (message: ItemWithId, isManual?: boolean) => void;
    paramId: number;
    routeChange: boolean;
    isLoading: boolean;
};

export const Messenger: React.FC<MessengerProps> = ({
        items,
        isLoading,
        onSendHandler, routeChange,
        paramId}) => {

    const [isManual, setIsManual] = React.useState<boolean>(false);
    const handleMessageSendForm = (message: ItemWithId) => {
        const newMessage: ItemWithId = {...message, id: generate()};
        setIsManual(true);
        onSendHandler(newMessage, isManual);
    };

    useEffect(() => {
        if (items.length) {
            const {author, chatId} = items[items.length - 1];
            if (author !== 'Bot') {
                const newMessage: ItemWithId = {
                    message: `Привет, ${author}! Это ответ бота`,
                    author: 'Bot',
                    id: generate(),
                    chatId
                };
                onSendHandler(newMessage, isManual);
            }
        }
    }, [items]);

    useEffect(() => {
    }, []);

    return (<div className='messenger'>
        {isLoading && <div  className="d-flex mt-5 justify-content-center"><Spinner variant='success' animation='grow' /></div>}
        {!isLoading && <div><Messages items={items}></Messages>
        <MessageField paramId={paramId} onSendHandler={handleMessageSendForm}></MessageField></div>}
    </div>);
}
