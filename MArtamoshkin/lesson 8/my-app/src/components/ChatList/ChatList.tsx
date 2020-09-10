import React from "react";
import classNames from 'classnames';
import { Image } from 'react-bootstrap';

import './ChatList.scss';
import { Link } from "react-router-dom";
import { NewChat } from "./NewChat/NewChat";
import { AppState } from "../../reducers";
import { useSelector } from "react-redux";

const ChatList = (props: ChatListProps) => {
    const { activeChatId } = props;
    const chats = useSelector<AppState, Chat[]>((state: AppState) => state.chats.items);

    return (<div className="d-flex justify-content-between flex-column h-100">
        <div className="chat-list">
            {chats.map((chat: Chat) => <Link to={`/chat/${chat.id}`} key={chat.id} className="active-chat">
                <div className={classNames('chat-field', { 'active-chat': chat.id === activeChatId })}>
                    <div className="chat-people">
                        <div className="avatar"><Image src={chat.author.avatar} alt="Avatar" rounded /></div>
                        <div className="chat-ib">
                            <h5>{chat.author.name}<span
                                className="chat-date">{!!chat.messages.length && new Date(chat.messages[chat.messages.length - 1].date).toLocaleDateString('ru-RU')}</span></h5>
                            <p className="text-truncate chat-text">{chat.messages.length ? chat.messages[chat.messages.length - 1].text : ''}</p>
                        </div>
                    </div>
                </div>
            </Link>)
            }
        </div>
        <NewChat />
    </div>
    );
};

export { ChatList };
