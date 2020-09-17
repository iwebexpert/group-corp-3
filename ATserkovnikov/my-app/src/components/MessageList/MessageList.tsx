import React, {useContext, useEffect, useState} from 'react';
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

    const saveChatDB = (messages: MessagesListData) => {
        setMessage(messages);
        updateChatDB(messages);
    };

    if (messages.chatId !== curMessages.chatId){
        setMessage(messages);
        setNewAuthor("");
    }

    const addMessageHandler = (newData: MessageData) => {
        if (curMessages.authors.find(c => c === newData.author) === undefined)
            setNewAuthor(newData.author);

        saveChatDB({...curMessages, messages: curMessages.messages.concat(newData)});
    };

     useEffect(() => {
         if (curAuthor === "") return;

         const newKey = generate();
         saveChatDB({...curMessages,
             messages: curMessages.messages.concat({author: "Бот",
                 messageText: "",
                 key: newKey,
                 read: false
             }),
             authors: curMessages.authors.concat(curAuthor)});
    }, [curAuthor]);

    return (
        <Container className="p-4">
            <Row as={Messages} messages={curMessages.messages} />
            <Row as={MessageForm}
                 messageFormData={{author: options.author, messageText: "", key: "", read: false}}
                 addMessageHandler={addMessageHandler}
                 checkCondition={options.confirmCondition}
            />
        </Container>
    );
};
