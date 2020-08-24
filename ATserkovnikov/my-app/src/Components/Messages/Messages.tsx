import React from 'react';
import {Message} from '../Message';
import { generate } from 'shortid';

import './Messages.scss';

export const Messages: React.FC<MessageProps> = ({messages}) => {
    const messageView = messages.map((item) => <Message Author={item.Author} MessageText={item.MessageText} key={generate()}/>);

    return (<div className="messages-block">
        {messageView}
    </div>);
};
