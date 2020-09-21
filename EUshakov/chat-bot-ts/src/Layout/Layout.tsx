import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Layout.scss";
import { ChatList, Chat as ChatListItem } from '../ChatList/ChatList';
import { Chat } from '../Chat/Chat';
import { Header } from '../Header/Header';
import { AuthorizationModel, AuthorizationContext, defaultAuth } from './AuthorizationContext';
import { chatsData } from '../helpers/chatsData';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, useParams } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ChatsState, ChatState } from '../models/types';

export const Layout: React.FC<{}> = () => {
    const chats = chatsData();
    const [chatsState, setChatsState] = useState<ChatsState>({ chats: chats });
    const chatList: ChatListItem[] = chatsState.chats.map(chat => ({
        id: chat.id,
        title: chat.title,
        link: `/chat/${chat.id}`
    }));

    const [auth, setAuth] = useState<AuthorizationModel>(defaultAuth);
    const handleLogin = (userName: string) => {
        setAuth({ isLoggedIn: true, userName: userName });
    };

    const handleLogout = () => {
        setAuth({ isLoggedIn: false, userName: '' });
    };

    const handleChatUpdate = (updatedChat: ChatState) => {
        const chats = [...chatsState.chats];
        const chatIdx = chats.findIndex(chat => chat.id === updatedChat.id);
        chats.splice(chatIdx, 1, updatedChat);
        setChatsState({ chats: chats });
    };


    return <Container className="layout d-flex flex-column">
        <AuthorizationContext.Provider value={auth}>
            <Header userName={auth.userName} isLoggedin={auth.isLoggedIn} login={handleLogin} logout={handleLogout} />
            <Row className="content flex-grow-1">
                <Col md={3}>
                    <ChatList chatList={chatList} />
                </Col>
                <Col md={9} className="d-flex">
                    <Switch className="flex-grow-1 d-flex">
                        <Route path="/" exact>
                            <Container>
                                <HomePage />
                            </Container>
                        </Route>
                        <Route path="/about">
                            <Container>
                                <AboutPage />
                            </Container>
                        </Route>
                        <Route path="/chat/:chatId">
                            <Chat chatsState={chatsState.chats} chatUpdated={handleChatUpdate} />
                        </Route>
                    </Switch>
                </Col>
            </Row>
            <Row className="footer">© 2020 AutoBot Chat</Row>
        </AuthorizationContext.Provider>
    </Container>
}