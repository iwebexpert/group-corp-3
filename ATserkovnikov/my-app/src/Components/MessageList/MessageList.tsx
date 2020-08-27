import React, {useEffect, useRef, useState} from 'react';
import {Messages} from '../Messages';
import {MessageForm} from '../MessafeForm';
import {Container, Row} from "react-bootstrap";
import { generate } from 'shortid';

import './MessageList.scss'


export const MessageList: React.FC<MessagesListProps> = ({messages, authors}) => {
    const [curMessages, setMessage] = useState(messages);
    const [curAuthors, setAuthor] = useState(authors);

    const curMessagesRef = useRef(curMessages);
    curMessagesRef.current = curMessages;

    let newAuthor: string = "";
    const [curAuthor, setNewAuthor] = useState(newAuthor);

    const addMessageHandler = (newData: MessageData) => {
        if (curAuthors.find(c => c === newData.author) === undefined)
            setNewAuthor(newData.author);

        newData.key = generate();
        setMessage(curMessages.concat(newData));
    };

     useEffect(() => {
         if (curAuthor === "") return;

         const newKey = generate();
         setMessage(curMessages.concat({author: "Бот", messageText: "", key: newKey}));
         setAuthor(curAuthors.concat(curAuthor));

         const timer = setTimeout(() => {
             const newMessages = curMessagesRef.current.map(item => {
                 if (item.key === newKey){
                     item.messageText = "Привет! " + curAuthor;
                 }
                 return item;
             });

             setMessage(newMessages);
        }, 2000);

         return () => clearTimeout(timer);
    }, [curAuthor]);

    return (
        <Container className="p-4 message-list-block">
            <Row as={Messages} messages={curMessages} />
            <Row as={MessageForm} messageFormData={{author: "", messageText: "", key: ""}} addMessageHandler={addMessageHandler}/>
        </Container>
    );
};
