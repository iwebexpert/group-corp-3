import './ChatsPage.scss';

import React, { useState } from 'react';
import { ChatsList } from './ChatsList/ChatsList';
import { AnswerStatus, Chat, ChatData } from './Chat/Chat';
import { Row, Col } from 'react-bootstrap';
import { chatsService } from '../../logic/domain/ChatsService';
import { useParams } from 'react-router';

const list = chatsService.getChatsList();

export const ChatsPage = () => {
    const [chats, setChats] = useState(
        list.map<ChatData>(ch => ({
            id: ch.id,
            name: ch.name,
            messages: ch.messages,
            answerStatus: AnswerStatus.None
        })));

    const params = useParams<{id?: string}>();
    const id = params.id ? parseInt(params.id) : null;
    const chat = chats.filter(ch => ch.id === id)[0];
    const changeChat = (ch: ChatData) => {
        const newChats = [...chats];
        const changedChat = chats.filter(och => och.id === ch.id)[0]
        if (changedChat) {
            changedChat.name = ch.name;
            changedChat.messages = [...ch.messages];
        }
        setChats(newChats);
    }

    return <Row> 
        <Col md={4}>        
            <ChatsList list={list}/>
        </Col>
        <Col>
            {chat 
                ? <Chat chat={chat} onChatChanges={changeChat}/>
                : <div className="text-center"> {
                    ( id ? <>Чат не найден.</> : <>Выберите чат из списка</> )
                } </div>
            }    
        </Col>
    </Row>
}