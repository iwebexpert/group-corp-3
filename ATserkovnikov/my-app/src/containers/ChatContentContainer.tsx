import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../reducers";
import {chatsLoad, messageAdd} from "../actions/chats";
import {MessageList} from "../components/MessageList";

export const ChatContentContainer: React.FC = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const messages = useSelector((state:AppState) => {
        const curChat = state.chats.entries.filter(chat => chat.id === +id)[0];
        return curChat ? curChat.messages : null;
    });

    useEffect(()=>{ dispatch(chatsLoad())}, []);

    const updateChatDB = (data: MessagesListData): void => {
        dispatch(messageAdd(data));
    };

    return messages && (
        <MessageList messages={messages} updateChatDB={updateChatDB} />
    );
};
