import { Chat } from "./Chat/Chat"
import React from "react"
import { AuthProvider } from "../../common/AuthProvider"

const Layout = () => {
    return <AuthProvider>
        <Chat />
    </AuthProvider>
}

export { Layout };