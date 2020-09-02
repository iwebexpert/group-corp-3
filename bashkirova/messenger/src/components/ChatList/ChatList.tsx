import React from 'react';

export type ChatListProps = {
    chats: {
        title: string;
        id: string;
    }[];
};

export const ChatList = ({chats = []}: ChatListProps) => {
    return (
        <ul>
            {chats.map((chat: any) => {
                return (
                    <li key={chat.id}>
                        {chat.title}
                    </li>
                );
            })}
        </ul>
    );
};