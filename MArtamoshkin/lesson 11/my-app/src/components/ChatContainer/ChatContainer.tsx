import { Col } from "react-bootstrap";
import { ChatList } from "../ChatList";
import React from "react";
import { useTranslation } from "react-i18next";
import { Chat } from "../Chat/Chat";
import { useParams } from "react-router-dom";
import { AppState } from "../../reducers";
import { useSelector } from "react-redux";

export const ChatContainer = () => {
    const params = useParams<ChatParams>();
    const chatId: number | null = (params && params.id) ? Number(params.id) : null;

    const { t } = useTranslation();

    const [isLoading, isError] = useSelector((state: AppState) => ([state.chats.loading, state.chats.error]));

    return <>
        <Col md={3} className="border-right p-0">
            <ChatList activeChatId={chatId} isLoading={isLoading} isError={isError} />
        </Col>

        <Col md={9} className="chat-container">
            {chatId ? <Chat activeChatId={chatId} isError={isError} /> :
                <h5 className="not-selected-chat-text text-center">{t('NOT_SELECTED_CHAT_TEXT')}</h5>}
        </Col></>;
};
