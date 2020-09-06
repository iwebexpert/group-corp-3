import { Col } from "react-bootstrap"
import { ChatList } from "../ChatList"
import React from "react"
import { useTranslation } from "react-i18next";
import { ChatsMessageSendAction, chatsMessageSend } from "../../actions/chats";
import { useDispatch, useSelector } from "react-redux"
import { Chat } from "../Chat/Chat"
import { AppState } from "../../reducers";

export const ChatContainer = (props: ChatsContainerProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
 
    const chats = useSelector((state: AppState) => state.chats.items);

    const { chatId } = props;

    const handleSend = (chatId: number, message: Message): ChatsMessageSendAction => dispatch(chatsMessageSend(message, chatId));

    return <>
        <Col md={3} className="border-right p-0">
            <ChatList activeChatId={chatId} chats={chats} />
        </Col>
        <Col md={9} className="chat-container">
            {chatId ? <Chat activeChatId={chatId} handleSend={handleSend} chats={chats} /> :
                <h5 className="not-selected-chat-text text-center">{t('NOT_SELECTED_CHAT_TEXT')}</h5>}
        </Col></>
}