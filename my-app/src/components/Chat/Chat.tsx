import './Chat.css'
import React, { useState } from 'react';
import { Messages } from './Messages/Messages';
import { Button2 } from '../Button2';
import { nextMessage } from './messagesSource';


export function Chat() {
    const [messages, setMessages] = useState<string[]>([]);
    const addMessage = () => setMessages( messages.concat(nextMessage()));

    return <div className="chat">
        <Messages items={messages} />
        <Button2 className="send-button" callback={() => addMessage()}>Отправить!</Button2>
    </div>
}



