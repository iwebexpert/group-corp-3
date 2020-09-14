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

export enum AnswerStatus {
    Typing,
    None
}

export type ChatData = {
    id: number,
    name: string,
    messages: MessageData[],
    answerStatus: AnswerStatus
};

type Props = {
    chat: ChatData,
    onChatChanges: (changedChat: ChatData) => void
}

export function Chat({chat, onChatChanges} : Props) {
    
    const setAnswerStatus = (status: AnswerStatus) => 
        onChatChanges({
            ...chat,
            answerStatus: status
        });

    const addMessage = (message: MessageData) => 
        onChatChanges({
            ...chat,
            messages: chat.messages.concat(message)
        });

    const [delay] = useState(new Delay(3000));
    
    const answerByBot = () => {
        setAnswerStatus(AnswerStatus.Typing);
        delay.start(() => {
            // состояние messages - состояние на момент старта таймаута
            addMessage(MessageData.answerFromBot());
            setAnswerStatus(AnswerStatus.None);
        }, 'from-last');
    }

    useEffect(() => {
        if (chat.messages.length && chat.messages[chat.messages.length - 1].isFromUser) {
            answerByBot();
        }
    }, [chat.messages]);

    const themeCtx = useContext(ThemeContext);
    const className = classnames('chat', 'theme-'+themeCtx.theme);
    return <div className={className}>
        { 
            chat.answerStatus === AnswerStatus.Typing ? 
                <span> <LangText text={{RU:'Собеседник печатает...',EN: 'Interlocutor is printing'}} /> </span> : 
                <span> &nbsp; </span>
        }
        <Messages items={chat.messages} />
        <MessageForm onSend={(message, userName) => addMessage(new MessageData(message, userName, true))} />
    </div>
}



