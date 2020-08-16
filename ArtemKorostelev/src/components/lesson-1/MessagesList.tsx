import React, { useState } from "react";
import { Message } from "./Message";

const MessagesList = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const addNewMessage = () => setMessages([...messages, 'Lorem ipsum dolor sit amet,'])
    const clearAllMessages = () => setMessages([]);

    return (
        <>
            <button onClick={addNewMessage}>Добавить сообщение</button>
            <button onClick={clearAllMessages} disabled={messages.length === 0}>
                Удалить все сообщения
            </button>
            {messages.map((item: string, index: number) => <Message key={index} text={item} />)}
        </>
    )
}

export default MessagesList;
