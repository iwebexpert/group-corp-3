import React, { useState, ReactElement, useEffect } from 'react';
import { Message } from './Message';
import { SendMessage } from './SendMessage';


type MessagingState = {
    userSentMsg: boolean;
    botSentMsg: boolean;
}

function Messages(): ReactElement{


    const timeout = 2000;
    const [messages, setMessage] = useState<MessageProps[]>([]);
    const [messagingState, setSendMsg] = useState<MessagingState>({ userSentMsg: false, botSentMsg: false});


    const addMessage = (message : MessageProps) => {
        if (message.text){
            setSendMsg({ userSentMsg: true, botSentMsg: messagingState.botSentMsg});
            setMessage([...messages, message]);
        }
    }

    useEffect(() => {
        if (messagingState.userSentMsg){
            if (!messagingState.botSentMsg){
                setSendMsg({ userSentMsg: messagingState.userSentMsg, botSentMsg: true});
                const botMessage: MessageProps = {
                    text: 'Добрый день. Я могу чем-то помочь?',
                    author: 'Чат-бот',
                };
                const botTimer = setTimeout(() => {
                    setMessage([...messages, botMessage]);
                    setSendMsg({ userSentMsg: false, botSentMsg: false});
                },timeout)
            }
            setSendMsg({ userSentMsg: false, botSentMsg: true});
        }
    } );

    return (<>
        {messages.map((item: MessageProps) => <Message text={item.text} author={item.author}/>)}
        <SendMessage sendMessageHandle = {addMessage}/>
    </>);
}

export { Messages };