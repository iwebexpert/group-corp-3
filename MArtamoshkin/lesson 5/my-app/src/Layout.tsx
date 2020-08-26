import { Chat } from "./components/Chat/Chat"
import React from "react"
import { AuthProvider } from "./providers/AuthProvider"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import './Layout.scss';
import { Row } from 'react-bootstrap';

const Layout = () => {
    return <AuthProvider>
        <div className="container">
            <Row>
                <Header />
            </Row>
            <Row className="panel chat-box card flex-row">
                <Chat />
            </Row>
            <Row>
                <Footer />
            </Row>
        </div>
    </AuthProvider>
}

export { Layout };
