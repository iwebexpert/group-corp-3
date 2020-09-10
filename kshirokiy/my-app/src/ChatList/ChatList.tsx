import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import {ChatsData} from '../types/types';
import {useSelector} from "react-redux";
import {AppState} from "../store/reducers/rootReducer";

export const chatsData: ChatsData[] = [
    {
        'id': 0,
        'title': 'Чат 0',
        'messages': []
    },
    {
        'id': 1,
        'title': 'Чат 1',
        'messages': []
    },
    {
        'id': 2,
        'title': 'Чат 2',
        'messages': []
    }
]

export const ChatList: React.FC<{}> = ({}) => {
    const chats = useSelector((state: AppState) => state.chats.chats);

    return (<div className={'pt-3'}>
        <Nav className='flex-column'>
            {chats.map((chat) =>
                (<Nav.Link as={Link} to={`/chats/${chat.id}`} key={chat.id}>{chat.title}</Nav.Link>))}
        </Nav>
    </div>);
}
