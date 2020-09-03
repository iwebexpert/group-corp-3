import React  from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export type ChatListProps = {
    chats: {
        title: string;
        id: string;
    }[];
    activeChat: string
};

export const ChatList = ({ chats = [], activeChat = '' }: ChatListProps) => {
    return (
        <div className="p-3">
            {chats.map((chat: any) => {
                return (
                    <Link key={chat.id} to={`/lesson07/${chat.id}`}>
                        <Card className={(chat.id === activeChat) ? 'bg-secondary' : ''}>
                            <Card.Body>{chat.title}</Card.Body>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
};
