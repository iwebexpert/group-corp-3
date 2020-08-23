import './Chat.scss'
import React, { useState, useEffect, useRef } from 'react';
import { Messages } from './Messages/Messages';
import { MessageForm } from './Messages/MessageForm/MessageForm';
import { MessageData } from '../../../logic/domain/MessageData';
import { Delay } from '../../../logic/utils/Delay';


enum AnswerStatus {
    Typing,
    None
}

export function Chat() {
    const [messages, setMessages] = useState<MessageData[]>([]);
    const [answerStatus, setAnswerStatus] = useState(AnswerStatus.None);

    const addMessage = (message: MessageData) => setMessages(
        messages.concat(message)
    );

    const messagesRef = useRef(messages);
    messagesRef.current = messages;

    const [delay] = useState(new Delay(3000));
    
    const answerByBot = () => {
        setAnswerStatus(AnswerStatus.Typing);
        delay.start(() => {
            // состояние messages - состояние на момент старта таймаута
            setMessages(messagesRef.current.concat(MessageData.answerFromBot()));
            setAnswerStatus(AnswerStatus.None);
        }, 'from-last');
    }

    useEffect(() => {
        if (messages.length && messages[messages.length - 1].isFromUser) {
            answerByBot();
        }
    }, [messages]);


    return <div className="chat">
        { answerStatus === AnswerStatus.Typing ? <span> Собеседник печатает... </span> : <span> &nbsp; </span>}
        <Messages items={messages} />
        <MessageForm onSend={(message) => addMessage(MessageData.fromUser(message))} />
    </div>
}



