import React, { useContext, useEffect, useRef, useState } from "react";
import { CreateMessage } from "./CreateMessage";

import './Chat.css';
import { MessagesList } from './MessagesList';
import useDebounce from "../common/useDebounce";
import { UserContext } from "../common/UserContext";
import { fakeUser, getFakeResponse } from '../common/fakeResponse';

const Chat = () => {
    const typingTimeout = 3000;
    const responseTimeout = (Math.random() * 10) * 1000 + typingTimeout;

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
        if (!hasResponse) {
            const newResponse: Message = getFakeResponse(responseStep);

            setMessages([...messages, newResponse]);
            setHasResponse(true);
            setResponseStep(responseStep + 1);
            setIsTyping(false);
        }
    }, [debouncedMessage]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!hasResponse) {
            setIsTyping(true);
        }
    }, [debouncedTyping]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (<>
        <div className="container">
            <div className="col-8 mx-auto">
                <div className="panel-heading">
                    <h2 className="panel-title pb-3">
                        bot <span
                        className="badge badge-chat">chat</span>
                    </h2>
                </div>
                <div className="panel chat-box card p-3" id="chat">
                    <div className="panel-body">
                        <div ref={chatsRef} className="chats">
                            <MessagesList messages={messages}/>
                        </div>
                    </div>
                    <span className="typing text-muted text-right"> {isTyping && <>{contactPerson.name} набирает
                        сообщение...</>} </span>

                    <div className="panel-footer pt-4">
                        <CreateMessage onSend={onSendHandler}/>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export { Chat };
