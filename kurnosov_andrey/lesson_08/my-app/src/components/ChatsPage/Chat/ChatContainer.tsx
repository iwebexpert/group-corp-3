import './Chat.scss'
import React from 'react';
import { MessageData } from '../../../logic/domain/MessageData';
import { Chat } from './Chat';
import { ChatsActionTypes, ChatsMessageSendAction } from '../../../actions/chats';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../reducers';


type Props = {
    chatId: number,
}

export function ChatContainer({chatId} : Props) {
    
    const dispatch = useDispatch();
    
    const {chats, loading} = useSelector((state: AppState) => state.chatsState);

    const chat = chats.filter(ch => ch.id === chatId)[0];
    
    const onMessageSend = (message: MessageData) => {
        dispatch<ChatsMessageSendAction>({
            type: ChatsActionTypes.CHATS_MESSAGE_SEND,
            payload: {
                message: {...message, chatId: chat.id }
            }   
        })
    
    }
    return <Chat chat={chat} onMessageSend={onMessageSend}/>
}



