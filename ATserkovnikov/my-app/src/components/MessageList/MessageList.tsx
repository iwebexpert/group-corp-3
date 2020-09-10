import React, {useContext, useEffect, useRef, useState} from 'react';
import {Messages} from './Messages';
import {MessageForm} from './MessafeForm';
import {Container, Row} from "react-bootstrap";
import {generate} from 'shortid';
import {ConfigContext} from "../../App";

import './MessageList.scss'

export const MessageList: React.FC<MessagesListProps> = ({messages, updateChatDB}) => {
    const {options} = useContext(ConfigContext);

    const [curMessages, setMessage] = useState(messages);
    const [curAuthor, setNewAuthor] = useState("");

    if (messages.chatId !== curMessages.chatId){
        updateChatDB(curMessages);

        setMessage(messages);
        setNewAuthor("");
    }

    const curMessagesRef = useRef(curMessages);
    curMessagesRef.current = curMessages;

    const addMessageHandler = (newData: MessageData) => {
        if (curMessages.authors.find(c => c === newData.author) === undefined)
            setNewAuthor(newData.author);

        setMessage({...curMessages, messages: curMessages.messages.concat(newData)});
    };

     useEffect(() => {
         if (curAuthor === "") return;

         const newKey = generate();
         setMessage({...curMessages,
             messages: curMessages.messages.concat({author: "Бот", messageText: "", key: newKey}),
             authors: curMessages.authors.concat(curAuthor)});

         const timer = setTimeout(() => {
             const newMessages = curMessagesRef.current.messages.map(item => {
                 if (item.key === newKey){
                     item.messageText = "Привет! " + curAuthor;
                 }
                 return item;
             });

             setMessage({...curMessages, messages: newMessages});
        }, 2000);

         return () => clearTimeout(timer);
    }, [curAuthor]);

    return (
        <Container className="p-4">
            <Row as={Messages} messages={curMessages.messages} />
            <Row as={MessageForm}
                 messageFormData={{author: options.author, messageText: "", key: ""}}
                 addMessageHandler={addMessageHandler}
                 checkCondition={options.confirmCondition}
            />
        </Container>
    );
};
