import './Chat.scss'
import React from 'react';
import { Message } from '../../../logic/domain/ChatsService';
import { Chat } from './Chat';
import { ChatsActionTypes, ChatsMessageSendAction } from '../../../actions/chats';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../reducers';


type Props = {
    chatId: number | null,
}

export function ChatContainer({chatId} : Props) {
    
    const dispatch = useDispatch();
    
    const {chats, loading} = useSelector((state: AppState) => state.chatsState);

    const chat = chats.filter(ch => ch.id === chatId)[0];
    
    const onMessageSend = (message: Message) => {
        dispatch<ChatsMessageSendAction>({
            type: ChatsActionTypes.CHATS_MESSAGE_SEND,
            payload: {
                message: {...message, chatId: chat.id }
            }   
        })
    
    }
    return chat ? 
        <Chat chat={chat} onMessageSend={onMessageSend}/> :
        <div className="text-center"> {
            ( chatId ? <>Чат не найден.</> : <>Выберите чат из списка</> )
        } </div>
}



