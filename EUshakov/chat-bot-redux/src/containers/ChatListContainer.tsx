import React from 'react';
import { ChatList } from '../ChatList/ChatList';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { chatsChatAdded } from '../actions/chats';


export const ChatListContainer: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const chatList = useSelector((state: AppState) => state.chats.entries.map(chat => ({
        id: chat.id,
        title: chat.title,
        link: `/chat/${chat.id}`
    })));

    const handleChatAdded = (chatName: string) => {
        dispatch(chatsChatAdded(chatName));
    }

    return <ChatList chatList={chatList} chatAdded={handleChatAdded} />
}