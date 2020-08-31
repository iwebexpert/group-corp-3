import { Chat } from "./components/Chat/Chat"
import React from "react"
import { AuthProvider } from "./providers/AuthProvider"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import './Layout.scss';
import { Row, Container, Col } from 'react-bootstrap';
import { ChatList } from "./components/ChatList"
import { UserSettingsProvider } from "./providers/UserSettingsProvider"

const Layout = () => {
    return <AuthProvider>
        <UserSettingsProvider>
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row className="panel chat-box card flex-row">
                    <Col md={3} className="border-right p-0">
                        <ChatList />
                    </Col>
                    <Col md={9}>
                        <Chat />
                    </Col>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </UserSettingsProvider>
    </AuthProvider>
}

export { Layout };
