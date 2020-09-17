import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import {ChatsData} from '../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../store/reducers/rootReducer';
import {push} from 'connected-react-router';
import {chatsLoad} from '../store/actions/actionType';

export const chatsData: ChatsData[] = [
    {
        'id': 0,
        'title': 'Чат 0',
        'messages': [],
        'answerBot': false
    },
    {
        'id': 1,
        'title': 'Чат 1',
        'messages': [],
        'answerBot': false
    },
    {
        'id': 2,
        'title': 'Чат 2',
        'messages': [],
        'answerBot': false
    }
]

export const ChatList: React.FC<{}> = ({}) => {
    const chats = useSelector((state: AppState) => state.chats.chats || []);
    const dispatch = useDispatch();

    if(Object.keys(chats).length === 0) {
        dispatch(chatsLoad());
    }

    const handleChatAdd = (id: any) => {
        dispatch(push(`/chats/${id}`));
    };

    return (<div className={'pt-3'}>
        <Nav className='flex-column'>
            {chats.map((chat) =>
                (<a
                    className={chat.answerBot ? 'answerBot mb-4' : 'mb-4'}
                    onClick={() => handleChatAdd(chat.id)}
                    key={chat.id}>{chat.title}</a>))}
        </Nav>
    </div>);
}
