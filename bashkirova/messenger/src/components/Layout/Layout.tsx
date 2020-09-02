import React from 'react';
import {Messenger} from '../Messenger';
import {Header} from "../Header";
import {ChatList} from "../ChatList";
import './Layout.css';

export const Layout = () => {
    const chats = [
        {title: 'Chat 1', id: '1'},
        {title: 'Chat 2', id: '2'},
        {title: 'Chat 3', id: '3'},
        {title: 'Chat 4', id: '4'},
    ];
    return (
        <div>
            <div className="header">
                <Header title="Header"/>
            </div>
            <div>
                <div className="chats">
                    <ChatList chats={chats}/>
                </div>
                <div className="messenger">
                    <Messenger/>
                </div>
            </div>
        </div>
    );
};