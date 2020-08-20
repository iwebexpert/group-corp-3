import React from "react";
import { Message } from "./Message";

export function MessageList(props: MessageListProps) {
  const messages = props.messages.map((m, index) => {
    return <li className="message-list" key={index}><Message message={m}/></li>;
  });

  return messages.length ? (
    <ul className="message-list">{messages}</ul>
  ) : (
    <p className="messenger__empty">Пусто</p>
  );
}
