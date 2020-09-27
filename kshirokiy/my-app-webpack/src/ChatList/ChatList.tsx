import React, {useEffect} from 'react';
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
    const classLink = ' mb-4 cursor-pointer';

    if (Object.keys(chats).length === 0) {

    }

    useEffect(() => {
        dispatch(chatsLoad());
    }, []);

    const handleChatAdd = (id: any) => {
        dispatch(push(`/chats/${id}`));
    };

    return (<div className={'pt-3'}>
        <Nav className='flex-column'>
            {chats.map((chat) => {
                return (<a
                    className={chat.answerBot ? `answerBot ${classLink}` : `${classLink}`}
                    onClick={() => handleChatAdd(chat.id)}
                    key={chat.id}>{chat.title}</a>)})}
        </Nav>
    </div>);
}
