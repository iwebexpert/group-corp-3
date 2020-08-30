import React, { useContext, useEffect, useRef, useState } from "react";
import { CreateMessage } from "../CreateMessage/CreateMessage";
import { MessagesList } from '../MessagesList/MessagesList';
import useDebounce from "../../hooks/useDebounce";
import { UserContext } from "../../contexts/UserContext";
import { fakeUser, getFakeResponse } from '../../common/fakeResponse';
import { Row } from "react-bootstrap";

import './Chat.scss';
import { SettingsContext } from "../../contexts/SettingsContext";
import { useTranslation } from "react-i18next";

const Chat = () => {
    const { t } = useTranslation();
    const typingTimeout = 3 * 1000;
    const responseTimeout = (Math.random() * 5) * 1000 + typingTimeout;

    const currentUser: User = useContext(UserContext);
    const settings = useContext(SettingsContext);
    const contactPerson: User = fakeUser;

    const [messages, setMessages] = useState<Message[]>([getFakeResponse(0)]);
    const [hasResponse, setHasResponse] = useState<boolean>(true);
    const [responseStep, setResponseStep] = useState<number>(1);
    const [isTyping, setIsTyping] = useState<boolean>(false);

    const debouncedMessage = useDebounce<Message[]>(messages, responseTimeout);
    const debouncedTyping = useDebounce<Message[]>(messages, typingTimeout);

    const chatsRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = (): void => {
        if (chatsRef && chatsRef.current) {
            chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
        }
    };

    const onSendHandler = (message: string): void => {
        const newMessage: Message = {
            text: message,
            date: new Date(),
            author: {
                avatar: currentUser.avatar,
                id: currentUser.id,
                name: settings.name
            }
        };

        setMessages([...messages, newMessage]);
        setHasResponse(false);
    };

    useEffect(() => {
        const addBotResponse = () => {
            if (!hasResponse) {
                const newResponse: Message = getFakeResponse(responseStep);

                setMessages([...messages, newResponse]);
                setHasResponse(true);
                setResponseStep(responseStep + 1);
                setIsTyping(false);
            }
        }

        addBotResponse();
    }, [debouncedMessage]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const showTyping = () => {
            if (!hasResponse) {
                setIsTyping(true);
            }
        }

        showTyping();
    }, [debouncedTyping]);  // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <>
            <Row>
                <div className="p-3 text-right w-100" id="chat">
                    <div className="panel-body">
                        <div ref={chatsRef} className="chats">
                            <MessagesList messages={messages} />
                        </div>
                    </div>
    <span className="typing text-muted"> {isTyping && <>{contactPerson.name} {t('TYPING')}</>}&nbsp; </span>
                </div>
            </Row>

            <Row>
                <div className="panel-footer pt-2 w-100">
                    <CreateMessage onSend={onSendHandler} />
                </div>
            </Row>
        </>
    );
};

export { Chat };
