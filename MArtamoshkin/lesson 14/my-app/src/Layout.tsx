import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


import { Row, Container } from 'react-bootstrap';
import { UserSettingsProvider } from "./providers/UserSettingsProvider";
import { Redirect, Route } from "react-router-dom";
import { ChatContainer } from "./components/ChatContainer/ChatContainer";
import { useDispatch } from "react-redux";
import { chatsLoad } from "./actions/chats/load";

const Layout = () => {
    const dispatch = useDispatch();
    dispatch(chatsLoad());

    return <AuthProvider>
        <UserSettingsProvider>
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row className="panel chat-box card flex-row">
                    <Route path='/' exact component={() => <Redirect to='/chat' />} />
                    <Route path='/chat' component={ChatContainer} exact/>
                    <Route path='/chat/:id' component={ChatContainer} />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </UserSettingsProvider>
    </AuthProvider>;
};

export { Layout };
