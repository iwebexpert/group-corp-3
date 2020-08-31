import React, { useState, useEffect } from 'react';
import { MessagesAreaComponent } from './MessagesAreaComponent';
import { useInput } from '../../shared/useInput';
import { Message, MessageAuthor } from '../../shared/types';
import { messageService } from '../services/MessageService';
import { debounceTime } from 'rxjs/operators';
import { Button, Form } from 'react-bootstrap';
import { appSettingsService } from '../services/AppSettingsService';

function ChatComponent(){
    const input = useInput('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [userName, setUserName] = useState<string>();

    const sendMessage = (): void => {
        if(input.value?.length > 0){
            let newMessage: Message = {
                author: MessageAuthor.User,
                authorName: userName,
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
                     authorName: 'Bot',
                     content: 'some answer'
                 };
            setMessages(messages => [...messages, newMessage]);
            }
        );
        return subscription.unsubscribe;
    }, []);

    useEffect(() => {
        const subscription = appSettingsService.settingsObservable()
        .subscribe(settings =>{
            console.log(settings)
            setUserName(settings.userName)
        });
        return subscription.unsubscribe;
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        sendMessage();
    };

    return (
    <>
    <MessagesAreaComponent messages={messages}/>
    <Form className="message-form d-flex" method="GET" onSubmit={handleSubmit}>
        <Form.Control {...input.bind} ></Form.Control>
        <Button variant="primary" className="ml-1" onClick={handleSubmit} disabled={(input.value?.length < 1) && userName === undefined}>Send message</Button>        
    </Form>
    </>
    );
};
export { ChatComponent };