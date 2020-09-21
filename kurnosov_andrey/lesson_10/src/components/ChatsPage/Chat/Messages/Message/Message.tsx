import React from 'react';
import classnames from 'classnames';
import { nanoid } from 'nanoid'
import { Message as MessageType } from '../../../../../logic/domain/ChatsService';

type Props = {
    message: MessageType
};

const Message = ({ message }: Props) => {
    const classNames = classnames(
        'message-container',
        {'from-user' : message.isFromUser },
        {'from-other' : !message.isFromUser }
    );
    
    const lines = message.text.trim().split(/\n\r?/g);
    const lastLine = lines.splice(lines.length - 2, 1); 
    const text = lines.map((line, i) => (
        <span key={nanoid()}>
            {line}
            <br />
        </span>
    )).concat( [<span key={nanoid()}>{lastLine}</span>] )

    return (
        <div className={classNames}>
            <div className="message">
                <div>{text} </div>
                <div className="author">{message.author} </div>
            </div>
        </div>);
};

export { Message };