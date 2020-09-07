import React from 'react';
import classNames from 'classnames';

import './Message.scss';
import Container from "@material-ui/core/Container";

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
            <Container maxWidth="sm" className={classes}>
                <Container maxWidth="sm" className="message">{text}</Container>
            </Container>);
}