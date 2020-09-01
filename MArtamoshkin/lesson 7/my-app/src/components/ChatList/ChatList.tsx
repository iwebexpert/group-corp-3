import React from "react";
import classNames from 'classnames';
import { Image } from 'react-bootstrap';

import './ChatList.scss';
import { Link } from "react-router-dom";
import { chatsStub } from "../../common/stubData";

const ChatList = (props: ChatListProps) => {
    const {activeChatId} = props;

    return (
        <div className="chat-list">
            {chatsStub.map((chat: Chat) => <Link to={`/chat/${chat.id}`} key={chat.id} className="active-chat">
                <div className={classNames('chat-field', {'active-chat': chat.id === activeChatId})}>
                    <div className="chat-people">
                        <div className="avatar"><Image src={chat.author.avatar} alt="Avatar" rounded/></div>
                        <div className="chat-ib">
                            <h5>{chat.author.name}<span
                                className="chat-date">{chat.date.toLocaleDateString('ru-RU')}</span></h5>
                            <p className="text-truncate">{chat.text}</p>
                        </div>
                    </div>
                </div>
            </Link>)
            }
        </div>
    );
};

export { ChatList };
