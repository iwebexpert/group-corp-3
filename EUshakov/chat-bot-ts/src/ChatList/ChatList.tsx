import React from 'react';
import "./ChatList.scss";
import classNames from 'classnames';
import { Nav } from 'react-bootstrap';

export type Chat = {
    name: string;
    link: string;
    isSelected?: boolean;
}
export type ChatListProps = {
    chatList: Chat[];
}
export const ChatList: React.FC<ChatListProps> = ({ chatList }) => {
    let chatBars = chatList.map((chat, idx) =>
        <Nav.Item key={idx}>
            <Nav.Link href={chat.link}>{chat.name}</Nav.Link>
        </Nav.Item>);
    return <Nav className="flex-column">
        {chatBars}
    </Nav>
}