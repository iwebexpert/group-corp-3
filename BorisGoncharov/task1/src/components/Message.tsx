import React from 'react';
import MessageModel from '../models/Message';

type Props = {
  message: MessageModel;
};

export default function Message({ message }: Props) {
  return (
    <div>
      Message: {message.text}
      <span>{message.author ? ' - ' + message?.author : ''}</span>
      <span>{message.date ? ' - ' + message.date.toLocaleString() : ''}</span>
    </div>
  );
}
