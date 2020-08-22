import React, { useState, useEffect } from 'react';
import { MessagesAreaComponent } from './MessagesAreaComponent';
import {useInput} from '../../shared/useInput';
import { Message, MessageAuthor } from '../../shared/types';
import { messageService } from '../services/MessageService';
import { debounceTime } from 'rxjs/operators';

function ChatComponent(){
    const input = useInput('');
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = (): void => {
        if(input.value?.length > 0){
            let newMessage: Message = {
                author: MessageAuthor.User,
                content: input.value
            };
            setMessages([...messages, newMessage]);
            messageService.sendMessage(newMessage);
            input.clear();
        }
    };

    useEffect(() => {
        const subscription = messageService.messageObservable()
        .pipe(debounceTime(1000))
        .subscribe(message => {
                let newMessage: Message = {
                     author: MessageAuthor.Bot,
                     content: 'some answer'
                 };
            setMessages(messages => [...messages, newMessage]);
            }
        );
        return subscription.unsubscribe;
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => { if (event.key === 'Enter') sendMessage();}

    return (
    <>
    <MessagesAreaComponent messages={messages}/>
    <div className="form-inline message-form">
        <input type="text" className="form-control"   {...input.bind} onKeyDown={handleKeyDown}></input>
        <button className="btn btn-primary ml-1" onClick={sendMessage} disabled={input.value?.length < 1}>Send message</button>
    </div>
    </>
    );
};
export { ChatComponent };