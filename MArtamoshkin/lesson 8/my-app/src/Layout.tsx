import React from "react"
import { AuthProvider } from "./providers/AuthProvider"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import './Layout.scss';
import { Row, Container } from 'react-bootstrap';
import { UserSettingsProvider } from "./providers/UserSettingsProvider"
import { useParams } from "react-router-dom"
import { ChatContainer } from "./components/ChatContainer/ChatContainer"

const Layout = () => {
    const params = useParams<ChatParams>();
    const chatId: number | null = (params && params.id) ? Number(params.id) : null;

    // TODO: uncomment after connect api
    // const dispatch = useDispatch();
    // dispatch(chatsLoad());

    return <AuthProvider>
        <UserSettingsProvider>
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row className="panel chat-box card flex-row">
                    <ChatContainer chatId={chatId}></ChatContainer>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </UserSettingsProvider>
    </AuthProvider>
}

export { Layout };
