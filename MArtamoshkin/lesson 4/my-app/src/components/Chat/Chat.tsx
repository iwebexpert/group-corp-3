import React, { useContext, useEffect, useRef, useState } from "react";
import { CreateMessage } from "../CreateMessage/CreateMessage";

import './Chat.scss';
import { MessagesList } from '../MessagesList/MessagesList';
import useDebounce from "../../hooks/useDebounce";
import { UserContext } from "../../contexts/UserContext";
import { fakeUser, getFakeResponse } from '../../common/fakeResponse';
import { ChatList } from "../ChatList";

const Chat = () => {
    const typingTimeout = 3 * 1000;
    const responseTimeout = (Math.random() * 5) * 1000 + typingTimeout;

    const currentUser: User = useContext(UserContext);
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

    const onSendHandler = (message: string) => {
        const newMessage: Message = {
            text: message,
            date: new Date(),
            author: {
                avatar: currentUser.avatar,
                id: currentUser.id,
                name: currentUser.name
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
            <div className="col-3 border-right p-0">
                <ChatList />
            </div>
            <div className="col-9">
                <div className="row">
                    <div className="p-3 text-right w-100" id="chat">
                        <div className="panel-body">
                            <div ref={chatsRef} className="chats">
                                <MessagesList messages={messages} />
                            </div>
                        </div>
                        <span className="typing text-muted"> {isTyping && <>{contactPerson.name} набирает
                        сообщение...</>}&nbsp; </span>
                    </div>
                </div>

                <div className="row">
                    <div className="panel-footer pt-2 w-100">
                        <CreateMessage onSend={onSendHandler} />
                    </div>
                </div>
            </div>
        </>
    );
};

export { Chat };
