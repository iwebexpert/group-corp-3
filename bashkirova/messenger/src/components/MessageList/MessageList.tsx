import React from 'react';

import {Message, MessageWithId} from '../Message';

type MessageListProps = {
    items: MessageWithId[],
};

export const MessageList: React.FC<MessageListProps> = ({items}) => {
    return (<div>
        {items.map((item, index) => <Message {...item} key={item.id}/>)}
    </div>);
}