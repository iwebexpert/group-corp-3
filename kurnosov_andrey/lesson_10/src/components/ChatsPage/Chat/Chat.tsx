import './Chat.scss'
import React, { useContext } from 'react';
import { Messages } from './Messages/Messages';
import { MessageForm } from './Messages/MessageForm/MessageForm';
import { LangText } from '../../../Langs';
import { ThemeContext } from '../../../Theme';
import classnames from 'classnames'
import { Chat as ChatData, AnswerStatus } from '../../../logic/domain/ChatsService';
import { Message } from '../../../logic/domain/ChatsService';


type Props = {
    chat: ChatData,
    onMessageSend: (changedChat: Message) => void
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
        <MessageForm onSend={(message, userName) => onMessageSend({text: message, author: userName, isFromUser: true, id:0 })} />
    </div>
}



