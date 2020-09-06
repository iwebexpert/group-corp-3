import React from 'react';
import {List} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";

export type ChatListProps = {
    chats: {
        title: string;
        id: string;
    }[];
};

export const ChatList = ({chats = []}: ChatListProps) => {
    return (
        <Container maxWidth="sm">
            <List component="nav" aria-label="main mailbox folders">
                {chats.map((chat: any) => {
                    return (
                        <ListItemText primary={chat.title} key={chat.id}>
                        </ListItemText>
                    );
                })}
            </List>
        </Container>
    );
};