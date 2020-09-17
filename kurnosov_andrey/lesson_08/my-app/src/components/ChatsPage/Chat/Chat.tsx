import './Chat.scss'
import React, { useContext } from 'react';
import { Messages } from './Messages/Messages';
import { MessageForm } from './Messages/MessageForm/MessageForm';
import { MessageData } from '../../../logic/domain/MessageData';
import { LangText } from '../../../Langs';
import { ThemeContext } from '../../../Theme';
import classnames from 'classnames'
import { ChatData, AnswerStatus } from '../../../logic/domain/ChatData';


type Props = {
    chat: ChatData,
    onMessageSend: (changedChat: MessageData) => void
}

export function Chat({chat, onMessageSend} : Props) {
    
    const themeCtx = useContext(ThemeContext);
    const className = classnames('chat', 'theme-'+themeCtx.theme);
    return <div className={className}>
        <h4 className="text-right">{chat.name}</h4>
        { 
            chat.answerStatus === AnswerStatus.Typing ? 
                <span> <LangText text={{RU:'Собеседник печатает...',EN: 'Interlocutor is printing'}} /> </span> : 
                <span> &nbsp; </span>
        }
        <Messages items={chat.messages} />
        <MessageForm onSend={(message, userName) => onMessageSend(new MessageData(message, userName, true))} />
    </div>
}



