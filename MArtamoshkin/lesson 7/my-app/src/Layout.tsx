import { Chat } from "./components/Chat/Chat"
import React, { useState } from "react"
import { AuthProvider } from "./providers/AuthProvider"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import './Layout.scss';
import { Row, Container, Col } from 'react-bootstrap';
import { ChatList } from "./components/ChatList"
import { UserSettingsProvider } from "./providers/UserSettingsProvider"
import { useParams } from "react-router-dom"
import { chatsStub } from "./common/stubData"
import { useTranslation } from "react-i18next"

const Layout = () => {
    const { t } = useTranslation();
    const params = useParams<ChatParams>();
    const chatId: number | null = (params && params.id) ? Number(params.id) : null;

    const [chats, setChats] = useState<Chat[]>(chatsStub);

    const handleSend = (chatId: number, message: Message): void => {
        setChats(chats.map((item: Chat): Chat => {
            if (item.id === chatId) {
                item.messages = [...item.messages, message];
            }

            return item;
        }));
    }

    return <AuthProvider>
        <UserSettingsProvider>
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row className="panel chat-box card flex-row">
                    <Col md={3} className="border-right p-0">
                        <ChatList activeChatId={chatId} chats={chats} />
                    </Col>
                    <Col md={9} className="chat-container">
                        {chatId ? <Chat activeChatId={chatId} handleSend={handleSend} chats={chats} /> :
                            <h5 className="not-selected-chat-text text-center">{t('NOT_SELECTED_CHAT_TEXT')}</h5>}
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
