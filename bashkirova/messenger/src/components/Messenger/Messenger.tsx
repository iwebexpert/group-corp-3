import React, {useState, useEffect} from 'react';
import {generate} from 'shortid';

import {MessageList} from '../MessageList';
import {MessageForm} from '../MessageForm';
import {MessageProps, MessageWithId} from '../Message';

import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import './Messenger.css';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(1),
            width: '100%',
        },
        paper: {
            margin: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const Messenger: React.FC<{}> = () => {
    const classes = useStyles();
    const [messages, setMessages] = useState<MessageWithId[]>([]);

    const handleMessageSend = (message: MessageProps) => {
        const newMessage: MessageWithId = {...message, id: generate()};
        setMessages([newMessage].concat(messages));
    };

    useEffect(() => {
        if (!messages.length) {
            return;
        }

        const {author} = messages[messages.length - 1];
        if (author !== 'Bot') {
            setTimeout(() => {
                const newMessage: MessageWithId = {text: `Hello, ${author}!`, author: 'Bot', id: generate()};
                setMessages(messages.concat([newMessage]));
            }, 1500);
        }

    }, [messages]);

    return (
        <>
            <Container maxWidth="sm">
                <MessageList items={messages}/>
            </Container>
            <Container maxWidth="sm">
                <MessageForm onSendHandler={handleMessageSend}/>
            </Container>
        </>);
}