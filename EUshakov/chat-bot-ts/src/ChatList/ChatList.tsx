import React from 'react';
import "./ChatList.scss";
import classNames from 'classnames';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export type Chat = {
    id: number;
    title: string;
    link: string;
}
export type ChatListProps = {
    chatList: Chat[];
}
export const ChatList: React.FC<ChatListProps> = ({ chatList }) => {
    let chatBars = chatList.map((chat, idx) =>
        <Nav.Item key={idx}>
            <Nav.Link as={Link} to={chat.link}>{chat.title}</Nav.Link>
        </Nav.Item>);
    return <Nav className="flex-column">
        {chatBars}
    </Nav>
}