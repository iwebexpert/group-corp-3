import React from 'react';
import {ChatList} from "./ChatList";
import Chat from "./Chat";
import {Header} from "./Header";
import {Col, Row} from "react-bootstrap";

export const Layout = () => {
    const chats = [
        { title: 'Chat 1', id: '1' },
        { title: 'Chat 2', id: '2' },
        { title: 'Chat 3', id: '3' },
        { title: 'Chat 4', id: '4' },
    ];
    return (
        <Row className='vh-100 pr-3 pb-3'>
            <Col className="border border-dark">
                <Header title="title" />
            </Col>

            <Row noGutters={true} className='h-75 w-100'>
                <Col md={3} className="border border-dark">
                    <ChatList chats={chats}/>
                </Col>

                <Col md={9} className="border border-dark h-100">
                    <Chat />
                </Col>
            </Row>
        </Row>
    );
};
