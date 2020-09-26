import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Layout.scss";
import { ChatList } from '../ChatList/ChatList';
import { Chat } from '../Chat/Chat';
import { Header } from '../Header/Header';
import { AuthorizationModel, AuthorizationContext, defaultAuth } from './AuthorizationContext';

export const Layout: React.FC<{}> = () => {
    const chatList = [
        { name: "AutoBot chat", isSelected: true, link: "/autobot" },
        { name: "Чат с Алисой", link: "/alise" },
        { name: "Chat with Siri", link: "/siri" }
    ];

    const [auth, setAuth] = useState<AuthorizationModel>(defaultAuth);
    const handleLogin = (userName: string) => {
        setAuth({ isLoggedIn: true, userName: userName });
    };

    const handleLogout = () => {
        setAuth({ isLoggedIn: false, userName: '' });
    };
    return <Container className="layout d-flex flex-column">
        <AuthorizationContext.Provider value={auth}>
            <Header userName={auth.userName} isLoggedin={auth.isLoggedIn} login={handleLogin} logout={handleLogout} />
            <Row className="content flex-grow-1">
                <Col md={3}>
                    <ChatList chatList={chatList} />
                </Col>
                <Col md={9} className="d-flex">
                    <Chat />
                </Col>
            </Row>
            <Row className="footer">© 2020 AutoBot Chat</Row>
        </AuthorizationContext.Provider>
    </Container>
}