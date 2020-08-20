import './Chat.css'
import React, { useState, useEffect, useRef } from 'react';
import { Messages } from './Messages/Messages';
import { MessageForm } from './Messages/MessageForm/MessageForm';
import { MessageData } from './Messages/Message/Message';


class Delay {
    constructor(private delay: number) {
    }
    private _timeout: number | null = null
    public start(func: () => void, mode: 'from-first'|'from-last') {
        const _setTimeout = () => {
            this._timeout = window.setTimeout(
                () => {
                    func();
                    if (this._timeout != null) {
                        window.clearTimeout(this._timeout);
                        this._timeout = null;
                    }
                }, this.delay);
        }
        
        if (this._timeout === null) {
            _setTimeout();
        } 
        else if (mode === 'from-last') {
            window.clearTimeout(this._timeout);
            _setTimeout()
        }
    }
}

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



