import React from "react";
import './Message.css';
import classNames from 'classnames';

export type MessageEntity = {
    text: string;
    author: string;
    isAuto?: boolean;
}

export type MessageProps = {
    message: MessageEntity;   
}

export function Message(props: MessageProps) {

  const classes = ["message"];
  if(props.message.isAuto){
      classes.push('message_auto')
  }

  return (
    <div className={classNames(classes)}>
      <p className="message_text">{props.message.text}</p>
      <sub className="message__caption"> 
        {props.message.author}
      </sub>
    </div>
  );
}