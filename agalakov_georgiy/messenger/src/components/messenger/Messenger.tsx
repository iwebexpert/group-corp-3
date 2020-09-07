import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { MessageFormEntity, MessageEntity } from './entities';
import './Messenger.css'

let id = 0;
let timer: number;

const Messenger: React.FC<{}> = () => {
    const [messages, setMessages] = useState<MessageEntity[]>([]);

    const addMessage = (messageForm: MessageFormEntity) => {
        setMessages([...messages, {...messageForm, id: id++}])
        clearTimeout(timer);
        timer = window.setTimeout(() => addBotMessage(), 5000);
    }

    useEffect(() => () => clearTimeout(timer), [])

    const addBotMessage = () => setMessages((prevState) => [...prevState, {author: 'naruto', body: 'rasengan', bot: true, id: id++}])

    return (
        <div className="messenger">
            <MessageList messages={messages}/>
            <MessageForm addMessage={addMessage}/>
        </div>
    )
}

export default Messenger;