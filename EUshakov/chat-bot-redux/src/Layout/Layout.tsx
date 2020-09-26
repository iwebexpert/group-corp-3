import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Layout.scss";
import { Header } from '../Header/Header';
import { AuthorizationModel, AuthorizationContext, defaultAuth } from './AuthorizationContext';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ChatContainer } from '../containers/ChatContainer';

import { useDispatch } from 'react-redux';
import { chatsLoad } from '../actions/chats';
import { ChatListContainer } from '../containers/ChatListContainer';

export const Layout: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState<AuthorizationModel>(defaultAuth);
    const handleLogin = (userName: string) => {
        setAuth({ isLoggedIn: true, userName: userName });
    };

    const handleLogout = () => {
        setAuth({ isLoggedIn: false, userName: '' });
    };

    useEffect(() => {
        setTimeout(() => {
            dispatch(chatsLoad());
        }, 2000);
    }, [dispatch]);

    return <Container className="layout d-flex flex-column">
        <AuthorizationContext.Provider value={auth}>
            <Header userName={auth.userName} isLoggedin={auth.isLoggedIn} login={handleLogin} logout={handleLogout} />
            <Row className="content flex-grow-1">
                <Col md={3}>
                    <ChatListContainer />
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
                            <ChatContainer />
                        </Route>
                    </Switch>
                </Col>
            </Row>
            <Row className="footer">© 2020 AutoBot Chat</Row>
        </AuthorizationContext.Provider>
    </Container>
}