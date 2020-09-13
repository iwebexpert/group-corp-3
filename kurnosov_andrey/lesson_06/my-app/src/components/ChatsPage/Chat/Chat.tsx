import './Chat.scss'
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Messages } from './Messages/Messages';
import { MessageForm } from './Messages/MessageForm/MessageForm';
import { MessageData } from '../../../logic/domain/MessageData';
import { Delay } from '../../../logic/utils/Delay';
import { LangText } from '../../../Langs';
import { ThemeContext } from '../../../Theme';
import classnames from 'classnames'
import { AuthContext } from '../../../Auth';

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

    const themeCtx = useContext(ThemeContext);
    const className = classnames('chat', 'theme-'+themeCtx.theme);
    return <div className={className}>
        { 
            answerStatus === AnswerStatus.Typing ? 
                <span> <LangText text={{RU:'Собеседник печатает...',EN: 'Interlocutor is printing'}} /> </span> : 
                <span> &nbsp; </span>
        }
        <Messages items={messages} />
        <MessageForm onSend={(message, userName) => addMessage(new MessageData(message, userName, true))} />
    </div>
}



