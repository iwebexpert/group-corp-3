import React, { FC } from 'react';
import classNames from 'classnames';
import './Message.scss';

export type MessageProps = Message & {
  user: User;
  onMessageClose: (id: string) => void;
};

export const Message: FC<MessageProps> = ({
  text,
  author,
  id,
  date,
  closable,
  user,
  onMessageClose,
}) => {
  const classes = classNames('message', {
    _grey: author.id !== user.id,
    _yellow: author.id === user.id,
  });

  const dateObj = new Date(date);

  return (
    <div className={classes}>
      <div>{text}</div>
      <small className="float-right">
        {author.name}, {dateObj.getDate()}/{dateObj.getMonth()}/
        {dateObj.getFullYear()}&nbsp;{dateObj.getHours()}:{dateObj.getMinutes()}
      </small>

      {closable && (
        <span className="message__close" onClick={() => onMessageClose(id)}>
          &#10005;
        </span>
      )}
    </div>
  );
};
