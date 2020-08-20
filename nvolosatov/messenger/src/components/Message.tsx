import React from "react";

export function Message(props: MessageProps) {
  const parseDate = (date: Date) => {
    return `${date.toDateString()}`;
  };

  const classes = ["message"];
  if(props.message.isAnswerphone){
      classes.push('message_auto')
  }

  return (
    <div className={classes.join(' ')}>
      <p className="message_text">{props.message.text}</p>
      <sub className="message__caption"> 
        {props.message.author} {parseDate(props.message.created)}
      </sub>
    </div>
  );
}
