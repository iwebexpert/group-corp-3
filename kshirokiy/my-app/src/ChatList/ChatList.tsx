import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

export const chatsData = [
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
    return (<div className={'pt-3'}>
        <Nav className='flex-column'>
            {chatsData.map((chat) =>
                (<Nav.Link as={Link} to={`/chats/${chat.id}`} key={chat.id}>{chat.title}</Nav.Link>))}
        </Nav>
    </div>);
}
