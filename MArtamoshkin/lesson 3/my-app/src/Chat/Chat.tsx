import React, { useState, useEffect, useRef, useContext } from "react";
import { CreateMessage } from "./CreateMessage";

import './Chat.css';
import { MessagesList } from './MessagesList';
import useDebounce from "../common/useDebounce";
import { UserContext } from "../common/UserContext";

const Chat = () => {
    const responseTimeout = 10 * 1000;

    const currentUser: User = useContext(UserContext);

    const [messages, setMessages] = useState<Message[]>([]);
    const [hasResponse, setHasResponse] = useState<boolean>(true);
    const debouncedMessage = useDebounce<Message[]>(messages, responseTimeout);

    const onSendHandler = (message: string) => {
        const newMessage: Message = {
            text: message,
            date: new Date(),
            author: {
                avatar: currentUser.avatar,
                id: currentUser.id,
                name: currentUser.name
            }
        }

        setMessages([...messages, newMessage]);
        setHasResponse(false);
    }

    useEffect(() => {
        if (!hasResponse) {
            const newResponse: Message = {
                text: 'Hello',
                date: new Date(),
                author: {
                    avatar: 'https://html5css.ru/w3images/avatar2.png',
                    name: 'Bot',
                    id: 2
                }
            }

            setMessages([...messages, newResponse]);
            setHasResponse(true);
        }
    }, [debouncedMessage])

    return (<>
        <div className="container">
            <div className="col-8 mx-auto">
                <div className="panel-heading">
                    <h2 className="panel-title pb-3">
                        bot <span
                            className="badge badge-secondary">chat</span>
                    </h2>
                </div>
                <div className="panel chat-box card p-3" id="chat">

                    <div className="panel-body">
                        <div className="chats">
                            <MessagesList messages={messages} />
                        </div>
                    </div>
                    <div className="panel-footer pt-4">
                        <CreateMessage onSend={onSendHandler} />
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export { Chat };
