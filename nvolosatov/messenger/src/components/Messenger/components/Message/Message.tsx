import React from "react";
import "./Message.scss";
import * as Bootstrap from "react-bootstrap";

export function Message(props: MessageProps) {
  const parseDate = (date: Date) => {
    return `${date.toDateString()}`;
  };

  return props.message.fromBot ? (
    <Bootstrap.Toast className="bot-message" onClose={props.removedMessage}>
      <Bootstrap.Toast.Header>
        <strong className="mr-auto">Мистер робот</strong>
        <small>{parseDate(props.message.created)}</small>
      </Bootstrap.Toast.Header>
      <Bootstrap.Toast.Body>{props.message.text}</Bootstrap.Toast.Body>
    </Bootstrap.Toast>
  ) : (
    <div className="message">
      <p className="message__text">{props.message.text}</p>
      <sub className="message__caption text-muted">
        {props.message.author} {parseDate(props.message.created)}
      </sub>
    </div>
  );
}
