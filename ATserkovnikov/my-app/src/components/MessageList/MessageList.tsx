import React, {useContext, useState} from 'react';
import {Messages} from './Messages';
import {MessageForm} from './MessafeForm';
import {Container, Row} from "react-bootstrap";
import {generate} from 'shortid';
import {ConfigContext} from "../../App";

import './MessageList.scss'

export const MessageList: React.FC<MessagesListProps> = ({chatId, messages, updateChatDB}) => {
    const {options} = useContext(ConfigContext);

    const [curChatId, setChatId] = useState(chatId);
    const [curMessages, setMessages] = useState(messages);

    const saveChatDB = (messages: MessageData[], newMessage: MessageData) => {
        setMessages(messages);
        updateChatDB(newMessage);
    };

    if (chatId !== curChatId){
        setChatId(chatId);
        setMessages(messages);
    }

    const addMessageHandler = (newData: MessageData) => {
        if (curMessages.find(c => c.author === newData.author) === undefined) {
            const newMessages = curMessages.concat(newData);

            saveChatDB(newMessages, newData);

            const newBotMessage = {
                author: "Бот",
                chatId: +curChatId,
                messageText: "",
                id: generate(),
                read: false
            };
            const botMessages = newMessages.concat(newBotMessage);

            saveChatDB(botMessages, newBotMessage);
        } else{
            const newMessages = curMessages.concat(newData);

            saveChatDB(newMessages, newData);
        }
    };

    return (
        <Container className="p-4">
            <Row as={Messages} messages={curMessages} />
            <Row as={MessageForm}
                 messageFormData={{chatId: curChatId, author: options.author, messageText: "", id: "", read: false}}
                 addMessageHandler={addMessageHandler}
                 checkCondition={options.confirmCondition}
            />
        </Container>
    );
};
