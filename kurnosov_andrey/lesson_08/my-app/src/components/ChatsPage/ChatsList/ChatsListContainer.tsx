import './ChatsList.scss';

import React, { useEffect } from 'react';
import { ChatsList } from './ChatsList';
import { AnswerStatus } from '../../../logic/domain/ChatData';
import { ChatsActionTypes, ChatsAddAction, chatsLoad } from '../../../actions/chats';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../reducers';


export const ChatsListContainer = () => {
    
    const dispatch = useDispatch();
    
    const {chats, loading} = useSelector((state: AppState) => state.chatsState);

    useEffect(() => {
        setTimeout(() => {
            dispatch(chatsLoad());
        }, 2000);
    }, []);

    const onAddChat = (chat: {name: string}) => {
        const nextId = Math.max(...chats.map(ch => ch.id)) + 1;
        dispatch<ChatsAddAction>({
            type: ChatsActionTypes.CHATS_ADD,
            payload: {
                chat: {
                    id: nextId,
                    answerStatus: AnswerStatus.None,
                    name: chat.name,
                    messages: []
                }
            }
        });
    }

    return <ChatsList loading={loading} list={chats}  onAddChat={onAddChat} />
}