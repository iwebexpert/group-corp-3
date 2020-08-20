import React from "react";

export type IMessage = {sender: string, text: string};
const MessageList = ({messages, currentSender}: {messages: IMessage[], currentSender: string}) => {
    return (
        <ul>
            {messages.map(m => m.sender === currentSender?
                <div style={{textAlign: 'right'}}>{m.text} : <b>me</b></div>:
                <div><b>{m.sender}</b> : {m.text}</div>
            )}
        </ul>
    );
}

export default MessageList;
