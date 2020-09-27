import React, { useState } from 'react';
import "./ChatList.scss";
import { Button, Form, FormControl, InputGroup, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export type Chat = {
    id: number;
    title: string;
    link: string;
}
export type ChatListProps = {
    chatList: Chat[];
    chatAdded: (chatName: string) => void
}
export const ChatList: React.FC<ChatListProps> = ({ chatList, chatAdded }) => {
    const [chatName, setChatName] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        const newChatName = chatName;
        setChatName('');
        chatAdded(newChatName);
    }
    let chatBars = chatList.map((chat) =>
        <Nav.Item key={chat.id}>
            <Nav.Link as={Link} to={chat.link}>{chat.title}</Nav.Link>
        </Nav.Item>);
    return <Nav className="flex-column">
        {chatBars}
        <Nav.Item>
            <Form inline onSubmit={handleSubmit}>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="Chat name"
                        aria-label="Chat name"
                        aria-describedby="basic-addon1"
                        value={chatName}
                        onChange={(event) => setChatName(event.target.value)}
                    />
                    <InputGroup.Append>
                        <Button id="basic-addon1" type="submit" disabled={chatName.length === 0}>+</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </Nav.Item>
    </Nav>
}