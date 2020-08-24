import React  from 'react';

export type ChatListProps = {
    chats: {
        title: string;
        id: string;
    }[];
};

export const ChatList = ({ chats = [] }: ChatListProps) => {
    return (
        <div className="p-3">
            {chats.map((chat: any) => {
                return (
                    <h5 className="mb-3" key={chat.id}>
                        {chat.title}
                    </h5>
                );
            })}
        </div>
    );
};
