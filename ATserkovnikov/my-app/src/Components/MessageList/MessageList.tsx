import React, {useEffect, useRef, useState} from 'react';
import {Messages} from '../Messages';
import {MessageForm} from '../MessafeForm';

import './MessageList.scss'

export const MessageList: React.FC<MessagesListProps> = ({messages, authors}) => {
    const [curMessages, setMessage] = useState(messages);
    const [curAuthors, setAuthor] = useState(authors);

    const curMessagesRef = useRef(curMessages);
    curMessagesRef.current = curMessages;

    let newAuthor: string = "";
    const [curAuthor, setNewAuthor] = useState(newAuthor);

    const addMessageHandler = (newData: MessageData) => {
        if (curAuthors.find(c => c === newData.Author) === undefined)
            setNewAuthor(newData.Author);

        setMessage(curMessages.concat(newData));
    };

     useEffect(() => {
         if (curAuthor === "") return;

         const timer = setTimeout(() => {
            setMessage(curMessagesRef.current.concat({Author: "Бот", MessageText: "Привет! " + curAuthor}));
            setAuthor(curAuthors.concat(curAuthor));
         }, 5000);

         return () => clearTimeout(timer);
    }, [curAuthor]);

    return (
        <div className="message-list-block">
            <Messages messages={curMessages} />
            <MessageForm MessageFormData={{Author: "", MessageText: ""}} AddMessageHandler={addMessageHandler} />
        </div>
    );
};
