import React, { useState } from "react";
import classNames from 'classnames';
import { Image } from 'react-bootstrap';

import './ChatList.scss';

const ChatList = () => {
    const [activeChat, setActiveChat] = useState<number>(1);

    const usersStub: Author[] = [
        {
            name: 'Bot 1',
            id: 1,
            avatar: 'https://html5css.ru/w3images/avatar2.png'
        },
        {
            name: 'Bot 2',
            id: 2,
            avatar: 'https://html5css.ru/w3images/avatar3.png'
        },
        {
            name: 'Bot 3',
            id: 3,
            avatar: 'https://html5css.ru/w3images/avatar4.png'
        },
        {
            name: 'Bot 4',
            id: 4,
            avatar: 'https://html5css.ru/w3images/avatar5.png'
        },
        {
            name: 'Bot 5',
            id: 5,
            avatar: 'https://html5css.ru/w3images/avatar6.png'
        },
    ];

    const chatsStub: Chat[] = [
        {
            id: 1,
            text: 'Тестовый текст от бота в списке чатов',
            author: usersStub[0],
            date: new Date()
        },
        {
            id: 2,
            text: 'Тестовый текст от бота в списке чатов',
            author: usersStub[1],
            date: new Date()
        },
        {
            id: 3,
            text: 'Тестовый текст от бота в списке чатов',
            author: usersStub[2],
            date: new Date()
        },
        {
            id: 4,
            text: 'Тестовый текст от бота в списке чатов',
            author: usersStub[3],
            date: new Date()
        },
        {
            id: 5,
            text: 'Тестовый текст от бота в списке чатов',
            author: usersStub[4],
            date: new Date()
        },
    ];

    const onClickChatHandler = (id: number) => {
        setActiveChat(id);
    };

    return (
        <div className="chat-list">
            {chatsStub.map((chat: Chat) => <div key={chat.id} className="active-chat"
                                                onClick={() => onClickChatHandler(chat.id)}>
                <div className={classNames('chat-field', {'active-chat': chat.id === activeChat})}>
                    <div className="chat-people">
                        <div className="avatar"><Image src={chat.author.avatar} alt="Avatar" rounded/></div>
                        <div className="chat-ib">
                            <h5>{chat.author.name}<span
                                className="chat-date">{chat.date.toLocaleDateString('ru-RU')}</span></h5>
                            <p className="text-truncate">{chat.text}</p>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export { ChatList };
