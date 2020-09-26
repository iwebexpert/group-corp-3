import React, { useContext, useEffect, useRef } from "react";
import { CreateMessage } from "../CreateMessage/CreateMessage";
import { MessagesList } from '../MessagesList/MessagesList';
import { UserContext } from "../../contexts/UserContext";
import { Row } from "react-bootstrap";

import './Chat.scss';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reducers";
import { chatsMessageSend } from "../../actions/chats/messageSend";

const Chat = (props: ChatProps) => {
    const { activeChatId, isError } = props;

    const chatsRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const chats = useSelector<AppState, Chat[]>((state: AppState) => state.chats.items);
    const users: User[] = useSelector<AppState, User[]>((state: AppState) => state.users.items);

    const activeChat = chats.filter((chat: Chat) => chat.id === activeChatId)[0];

    let messages: Message[] = [];
    let contactPerson: User | null = null;
    if (activeChat) {
        messages = activeChat.messages;
        contactPerson = users.filter((u: User) => u.id === activeChat.author.id)[0];
    }

    const currentUser: User = useContext(UserContext);

    const scrollToBottom = (): void => {
        if (chatsRef && chatsRef.current) {
            chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
        }
    };

    const handleSend = (chatId: number, message: Message) => dispatch(chatsMessageSend(message, chatId));

    const onSendHandler = (message: string): void => {
        const newMessage: Message = {
            text: message,
            date: new Date(),
            author: currentUser.id
        };

        handleSend(activeChatId, newMessage);
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <>
        {isError && <h5 className="error text-center mt-4">{t('LOADING_ERROR')}</h5> }
            {(contactPerson && !isError) && <>
                <Row>
                    <div className="p-3 text-right w-100" id="chat">
                        <div className="panel-body">
                            <div ref={chatsRef} className="chats">
                                <MessagesList messages={messages} contactPerson={contactPerson} />
                            </div>
                        </div>
                        <span className="typing text-muted"> {activeChat.isTyping && <>{contactPerson.name} {t('TYPING')}</>}&nbsp; </span>
                    </div>
                </Row>

                <Row>
                    <div className="panel-footer pt-2 w-100">
                        <CreateMessage onSend={onSendHandler} />
                    </div>
                </Row>
            </>}
        </>
    );
};

export { Chat };
