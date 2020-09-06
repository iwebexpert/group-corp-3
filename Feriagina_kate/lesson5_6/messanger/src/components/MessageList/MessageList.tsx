import React from "react";
import { Message, MessageEntity } from "../Message";
import './MessageList.css';

export type MessageListProps = {
    messages: MessageEntity[];
}

export function MessageList(props: MessageListProps) {
  const messages = props.messages.map((m, index) => {
    return <li className="message-list" key={index}><Message message={m}/></li>;
  });

  return <ul className="message-list">{messages}</ul>;
}