import React from 'react';

import {Message, MessageWithId} from '../Message';
import Container from "@material-ui/core/Container";
import {List} from "@material-ui/core";

type MessageListProps = {
    items: MessageWithId[];
};

export const MessageList: React.FC<MessageListProps> = ({items}) => {
    return (
        <Container maxWidth="sm">
            {items.map((item, index) => <Message {...item} key={item.id}/>)}
        </Container>
    );
}