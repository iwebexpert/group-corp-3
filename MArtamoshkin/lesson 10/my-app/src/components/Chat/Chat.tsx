import React, { useContext, useEffect, useRef, useState } from "react";
import { CreateMessage } from "../CreateMessage/CreateMessage";
import { MessagesList } from '../MessagesList/MessagesList';
import useDebounce from "../../hooks/useDebounce";
import { UserContext } from "../../contexts/UserContext";
import { getFakeResponse } from '../../common/fakeResponse';
import { Row } from "react-bootstrap";

import './Chat.scss';
import { useTranslation } from "react-i18next";
import { chatsMessageSend, ChatsMessageSendAction } from "../../actions/chats";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reducers";

const Chat = (props: ChatProps) => {
    const { activeChatId } = props;

    const chatsRef = useRef<HTMLDivElement>(null);

    const { t } = useTranslation();

    const typingTimeout = 3 * 1000;
    const responseTimeout = (Math.random() * 5) * 1000 + typingTimeout;

    const dispatch = useDispatch();

    const chats = useSelector<AppState, Chat[]>((state: AppState) => state.chats.items);
    const activeChat = chats.filter((chat: Chat) => chat.id === activeChatId)[0];
    const messages = activeChat.messages;
    const contactPerson = useSelector<AppState, User>((state: AppState) => state.users.items.filter((u: User) => u.id === activeChat.author.id)[0]);

    const currentUser: User = useContext(UserContext);

    const [hasResponse, setHasResponse] = useState<boolean>(true);
    const [responseStep, setResponseStep] = useState<number>(0);
    const [isTyping, setIsTyping] = useState<boolean>(false);

    const debouncedMessage = useDebounce<Message[]>(messages, responseTimeout);
    const debouncedTyping = useDebounce<Message[]>(messages, typingTimeout);

    const scrollToBottom = (): void => {
        if (chatsRef && chatsRef.current) {
            chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
        }
    };

    const handleSend = (chatId: number, message: Message): ChatsMessageSendAction => dispatch(chatsMessageSend(message, chatId));

    useEffect(() => {
        setIsTyping(false);
        setHasResponse(true);
    }, [activeChat])

    const onSendHandler = (message: string): void => {
        const newMessage: Message = {
            text: message,
            date: new Date(),
            author: currentUser.id
        };

        handleSend(activeChatId, newMessage);
        setHasResponse(false);
    };

    useEffect(() => {
        const addBotResponse = () => {
            if (!hasResponse) {
                const newResponse: Message = getFakeResponse(responseStep, contactPerson.id);

                handleSend(activeChatId, newResponse);
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
                            <MessagesList messages={messages} contactPerson={contactPerson} />
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
