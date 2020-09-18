import React, { FC } from 'react';
import classNames from 'classnames';
import { Spinner } from 'react-bootstrap';
import './Message.scss';

export type MessageProps = Message & {
  user: User;
  onMessageClose: (id: string) => void;
};

export const Message: FC<MessageProps> = ({
  text,
  authorId,
  authorName,
  id,
  date,
  closable,
  sentOnServer,
  user,
  onMessageClose,
}) => {
  const userIsAuthor = authorId === user.id;

  const classes = classNames('message', {
    _grey: !userIsAuthor,
    _yellow: userIsAuthor,
  });

  const dateObj = new Date(date);

  return (
    <div className={classes}>
      <div>{text}</div>
      <small className="float-right">
        {authorName}, {dateObj.getDate()}/{dateObj.getMonth()}/
        {dateObj.getFullYear()}&nbsp;{dateObj.getHours()}:{dateObj.getMinutes()}{' '}
        {userIsAuthor &&
          (sentOnServer ? (
            <>&#10003;</>
          ) : (
            <Spinner animation="grow" size="sm" />
          ))}
      </small>

      {closable && (
        <span className="message__close" onClick={() => onMessageClose(id)}>
          &#10005;
        </span>
      )}
    </div>
  );
};
