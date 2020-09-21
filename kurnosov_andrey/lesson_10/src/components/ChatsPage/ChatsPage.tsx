import './ChatsPage.scss';

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { ChatContainer } from './Chat/ChatContainer';
import { ChatsListContainer } from './ChatsList/ChatsListContainer';

export const ChatsPage = () => {

    const params = useParams<{id?: string}>();
    const id = params.id ? parseInt(params.id) : null;

    return <Row> 
        <Col md={4}>        
            <ChatsListContainer selectedChatId={id}/>
        </Col>
        <Col>
            <ChatContainer chatId={id} />    
        </Col>
    </Row>
}