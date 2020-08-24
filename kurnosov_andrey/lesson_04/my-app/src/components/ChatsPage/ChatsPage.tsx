import './ChatsPage.scss';

import React from 'react';
import { ChatsList } from './ChatsList/ChatsList';
import { Chat } from './Chat/Chat';

const list = [
    {id: '1', name:'Чат 1'},
    {id: '2', name:'Чат 2'},
    {id: '3', name:'Чат 3'},
    {id: '4', name:'Чат 4'},
    {id: '5', name:'Чат 5'},
]

export const ChatsPage = () => {
    return <div className="chats-page">
        <div className="chats-list-container">
            <ChatsList list={list}/>
        </div>
        <div className="chat-container">
            <Chat />
        </div>
    </div>
}