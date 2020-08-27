import React, { useState, useEffect } from "react";
import { MessageList } from "./components/MessageList";
import { NewMessageForm } from "./components/NewMessageForm";
import "./Messenger.scss";
import { generateId } from "../../utility";

export function Messenger() {
  const [messages, setMessages] = useState<MessageEntity[]>([]);
  const [botAnswered, setBotAnswered] = useState<boolean>(false);

  const onCreatedNewMessage = (entity: MessageEntity): void => {
    setMessages(messages.concat([entity]));
    setBotAnswered(false);
  };

  const onRemovedMessage = (index: number): void => {
    const copy = [...messages];
    copy.splice(index, 1);
    setMessages(copy);
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (botAnswered || !lastMessage) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setMessages(
        messages.concat([
          {
            author: "Мистер робот",
            created: new Date(),
            text: `Здрасте, ${messages[messages.length - 1].author}`,
            fromBot: true,
            id: generateId()
          },
        ])
      );
      setBotAnswered(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, botAnswered]);

  return (
    <div className="messenger">
      <h2 className="messenger__name">Messenger 1</h2>
      <div className="messenger__list">
        <MessageList messages={messages} removedMessage={onRemovedMessage} />
      </div>
      <div className="messenger__message-form">
        <NewMessageForm createdMessage={onCreatedNewMessage} />
      </div>
    </div>
  );
}
