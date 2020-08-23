import { Chat } from "./components/Chat/Chat"
import React from "react"
import { AuthProvider } from "./providers/AuthProvider"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import './Layout.scss';

const Layout = () => {
    return <AuthProvider>
        <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row panel chat-box card flex-row">
                <Chat />
            </div>
            <div className="row">
                <Footer />
            </div>
        </div>
    </AuthProvider>
}

export { Layout };