import React, { useEffect, useRef } from "react";
import { Message } from "../Message/Message";
import "./MessageList.scss";

export function MessageList(props: MessageListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.messages.length && listRef?.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  });

  const messages = props.messages.map((m, index) => {
    return <Message message={m} key={index} />;
  });

  return messages.length ? (
    <div className="message-list" ref={listRef}>
      {messages}
    </div>
  ) : (
    <p className="empty-list">Пока еще нет сообщений</p>
  );
}
