import './ChatsList.scss';

import React, { useEffect } from 'react';
import { ChatsList } from './ChatsList';
import { AnswerStatus } from '../../../logic/domain/ChatsService';
import { ChatsActionTypes, ChatsAddAction, chatsLoad } from '../../../actions/chats';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../reducers';
import { push } from 'connected-react-router';


export const ChatsListContainer = ({selectedChatId}:{selectedChatId:number|null}) => {
    
    const dispatch = useDispatch();
    
    const {chats, loading} = useSelector((state: AppState) => state.chatsState);

    useEffect(() => {
        if (chats.length === 0)
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
                    messages: [],
                    unreadMessages: [],
                }
            }
        })
        dispatch(push('/chats/' + nextId));
    }
    const onSelect = (el: {id:number}) => dispatch(push('/chats/' + el.id))

    const chatsList = chats.map(ch => ({...ch, unreadedMessagesCount: ch.unreadMessages.length}));
    return <ChatsList loading={loading} list={chatsList} onAddChat={onAddChat} onSelect={onSelect} selectedId={selectedChatId} />
}