import React, { useState, useEffect } from "react";
import { MessageList } from "../MessageList";
import { MessageForm } from "../MessageForm";
import { MessageEntity } from "../Message";
import './Messanger.css';

export function Messenger() {
  const [messages, setMessages] = useState<MessageEntity[]>([]);

  const onCreatedNewMessage = (entity: MessageEntity): void => {
    setMessages([...messages, entity]);
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.isAuto) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setMessages([...messages,
          {
            author: "AmigoBot",
            text: '¡Hola, Amigo!',
            isAuto: true,
          }
        ]
      );
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="messenger">
      <div className="messenger_list">
        <MessageList messages={messages} />
      </div>
        <MessageForm createdMessage={onCreatedNewMessage} />      
    </div>
  );
}