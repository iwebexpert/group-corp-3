import React from 'react';
import classNames from 'classnames';

import './Message.scss';

export type MessageProps = {
    text: string;
    author?: string;
};

export type MessageWithId = MessageProps & {
    id: string;
};
export const Message: React.FC<MessageProps> = ({text, author}) => {

    const classes = classNames('messages', {
        'mine': author !== 'Bot',
        'yours': author === 'Bot',
    });

    return (
        <div className={classes}>
            <div className="message">{text}</div>
        </div>);
}