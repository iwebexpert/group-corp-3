import { Col } from "react-bootstrap"
import { ChatList } from "../ChatList"
import React from "react"
import { useTranslation } from "react-i18next";
import { Chat } from "../Chat/Chat"

export const ChatContainer = (props: ChatsContainerProps) => {
    const { chatId } = props;

    const { t } = useTranslation();

    return <>
        <Col md={3} className="border-right p-0">
            <ChatList activeChatId={chatId}/>
        </Col>
        <Col md={9} className="chat-container">
            {chatId ? <Chat activeChatId={chatId} /> :
                <h5 className="not-selected-chat-text text-center">{t('NOT_SELECTED_CHAT_TEXT')}</h5>}
        </Col></>
};
