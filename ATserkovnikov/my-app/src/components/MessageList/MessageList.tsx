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

    const saveChatDB = (messages: MessageData[]) => {
        setMessages(messages);
        updateChatDB({chatId: curChatId, messages: messages, unreadMessageCount: 0});
    };

    if (chatId !== curChatId){
        setChatId(chatId);
        setMessages(messages);
    }

    const addMessageHandler = (newData: MessageData) => {
        if (curMessages.find(c => c.author === newData.author) === undefined) {
            const newMessages = curMessages.concat(newData);
            saveChatDB(newMessages);

            const botMessages = newMessages.concat({
                author: "Бот",
                messageText: "",
                id: generate(),
                read: false
            });
            saveChatDB(botMessages);
        } else{
            const newMessages = curMessages.concat(newData);
            saveChatDB(newMessages);
        }
    };

    return (
        <Container className="p-4">
            <Row as={Messages} messages={curMessages} />
            <Row as={MessageForm}
                 messageFormData={{author: options.author, messageText: "", id: "", read: false}}
                 addMessageHandler={addMessageHandler}
                 checkCondition={options.confirmCondition}
            />
        </Container>
    );
};
