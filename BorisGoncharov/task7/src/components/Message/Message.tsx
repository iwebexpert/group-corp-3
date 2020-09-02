import React, { FC } from 'react';
import classNames from 'classnames';

import './Message.scss';

export type MessageProps = Message & {
  onMessageClose: (id: string) => void;
};

export const Message: FC<MessageProps> = ({
  text,
  author,
  id,
  date,
  closable,
  onMessageClose,
}) => {
  const classes = classNames('message', {
    _grey: author === 'Bot',
    _yellow: author !== 'Bot',
  });

  return (
    <div className={classes}>
      <div>{text}</div>
      <small className="float-right">
        {author}, {new Date(date).toDateString()}
      </small>

      {closable && (
        <span className="message__close" onClick={() => onMessageClose(id)}>
          &#10005;
        </span>
      )}
    </div>
  );
};
