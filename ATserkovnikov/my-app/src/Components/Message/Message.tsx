import React from 'react';
import classNames from 'classnames';

import './Message.scss';

export const Message: React.FC<MessageData> = ({Author, MessageText}) => {
    const classes = classNames('message', {
        'message-bot': Author === 'Бот',
        'message-user': Author !== 'Бот',
    });
    return (
        <div className={classes}>
            <b>{Author}</b>&nbsp;
            <span>{MessageText}</span>
        </div>);
};
