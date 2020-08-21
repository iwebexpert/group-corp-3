import React, { FC } from 'react';
import classNames from 'classnames';

import './Message.scss';

export type MessageProps = {
  text: string;
  author?: string;
  id: string;
};

export const Message: FC<MessageProps> = ({ text, author }) => {
  const classes = classNames('message p-3 m-2 rounded min-w-50', {
    'align-self-start bg-secondary text-white': author === 'Bot',
    'align-self-end bg-warning text-dark': author !== 'Bot',
  });

  return (
    <div className={classes}>
      <div>{text}</div>
      <small className="float-right">{author}</small>
    </div>
  );
};
