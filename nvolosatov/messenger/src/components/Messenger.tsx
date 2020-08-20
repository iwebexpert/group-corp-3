import React, { useState, useEffect } from "react";
import { MessageList } from "./MessageList";
import { NewMessage } from "./NewMessage";

export function Messenger() {
  const [messages, setMessages] = useState<MessageEntity[]>([]);

  const onCreatedNewMessage = (entity: MessageEntity): void => {
    setMessages(messages.concat([entity]));
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.isAnswerphone) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setMessages(
        messages.concat([
          {
            author: "Мистер робот",
            created: new Date(),
            text: `Здрасте, ${messages[messages.length - 1].author}`,
            isAnswerphone: true,
          },
        ])
      );
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="messenger">
      <div className="messenger__list">
        <MessageList messages={messages} />
      </div>
      <div className="messenger__message-form">
        <NewMessage createdMessage={onCreatedNewMessage} />
      </div>
    </div>
  );
}
