import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../reducers";
import {chatsLoadDB, MessageAddDB} from "../actions/chats";
import {MessageList} from "../components/MessageList";

export const ChatContentContainer: React.FC = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const messages = useSelector((state: AppState) => {
        const chat = state.chats.entries.filter(chat => chat.id === +id)[0];
        return chat ? chat.messages : null;
    });

    useEffect(()=>{ dispatch(chatsLoadDB())}, []);

    const updateChatDB = (messagesAdd: MessageData): void => {
        dispatch(MessageAddDB(messagesAdd));
    };

    return messages && (
        <MessageList chatId={id} messages={messages} updateChatDB={updateChatDB}/>
    );
};

