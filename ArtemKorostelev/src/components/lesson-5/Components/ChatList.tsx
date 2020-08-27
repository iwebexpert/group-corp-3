import React  from 'react';
import {Card} from "react-bootstrap";

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
                    <Card key={chat.id}>
                        <Card.Body>{chat.title}</Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};
