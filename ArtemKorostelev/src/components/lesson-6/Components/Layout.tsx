import React, {useState} from 'react';
import {ChatList} from "./ChatList";
import Chat from "./Chat";
import {Header} from "./Header";
import {Col, Row} from "react-bootstrap";
import {SettingsContext} from "../Contexts/settings";

export const Layout = () => {

    const [context, setContext] = useState({
            name: 'Initial Name',
            language: 'en',
        });

    const chats = [
        { title: 'Chat 1', id: '1' },
        { title: 'Chat 2', id: '2' },
        { title: 'Chat 3', id: '3' },
        { title: 'Chat 4', id: '4' },
    ];

    const handleSettingsModalSubmit = (settings: any): void => {
        setContext({ ...settings });
    };

    return (
        <SettingsContext.Provider value={ context }>
            <div>Current name {context.name}</div>
            <div>Current language {context.language}</div>

            <Row className='vh-100 pr-3 pb-3'>
                <Col className="border border-dark">
                    <Header title="title" onModalSubmit={handleSettingsModalSubmit}/>
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
        </SettingsContext.Provider>
    );
};
