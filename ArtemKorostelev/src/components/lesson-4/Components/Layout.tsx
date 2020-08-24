import React from 'react';
import {ChatList} from "./ChatList";
import Chat from "./Chat";
import {Header} from "./Header";

export const Layout = () => {
    const chats = [
        { title: 'Chat 1', id: '1' },
        { title: 'Chat 2', id: '2' },
        { title: 'Chat 3', id: '3' },
        { title: 'Chat 4', id: '4' },
    ];
    return (
        <div className="row vh-100 pr-3 pb-3">
            <div className="h-25 col-12 border border-dark">
                <Header title="title" />
            </div>

            <div className='h-75 row no-gutters w-100'>
                <div className="col-3 h-100 border border-dark">
                    <ChatList chats={chats}/>
                </div>

                <div className="col-9 h-100 border border-dark">
                    <Chat />
                </div>
            </div>
        </div>
    );
};
