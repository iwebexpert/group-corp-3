import { Chat } from "./components/Chat/Chat"
import React from "react"
import { AuthProvider } from "./providers/AuthProvider"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import './Layout.scss';
import { Row, Container, Col } from 'react-bootstrap';
import { ChatList } from "./components/ChatList"
import { UserSettingsProvider } from "./providers/UserSettingsProvider"
import { useParams } from "react-router-dom"

const Layout = () => {
    const params = useParams<ChatParams>();
    const chatId: number | null = (params && params.id) ? Number(params.id) : null;
    
    return <AuthProvider>
        <UserSettingsProvider>
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row className="panel chat-box card flex-row">
                    <Col md={3} className="border-right p-0">
                        <ChatList activeChatId={chatId} />
                    </Col>
                    <Col md={9}>
                       {chatId && <Chat activeChatId={chatId}/>}
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
