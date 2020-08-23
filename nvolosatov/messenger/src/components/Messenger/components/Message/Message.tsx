import React from "react";
import "./Message.scss";

export function Message(props: MessageProps) {
  const parseDate = (date: Date) => {
    return `${date.toDateString()}`;
  };

  const classes = ["message"];
  if (props.message.fromBot) {
    classes.push("message_auto");
  }

  return (
    <div className={classes.join(" ")}>
      <p className="message__text">{props.message.text}</p>
      <sub className="message__caption text-muted">
        {props.message.author} {parseDate(props.message.created)}
      </sub>
    </div>
  );
}
