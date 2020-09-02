import {useParams} from "react-router-dom";
import {ChatsDB} from "../../Helpers/ChatsDB";
import React, {useState} from "react";
import {MessageList} from "../MessageBlock/MessageList";

export const ChatContent: React.FC = () => {
    const [curChatsDB, setChatsDB] = useState(ChatsDB);

    const {id} = useParams();
    const messages = curChatsDB.filter(c => c.id === +id)[0]?.messages;

    const updateChatDB = (data: MessagesListData): void => {
        const newChatDB = curChatsDB.map(item => {
            if (item.id === data.chatId){
                item.messages = data;
            }
            return item;
        });

        setChatsDB(newChatDB);
    };

    return messages && (
        <MessageList messages={messages} updateChatDB={updateChatDB} />
    );
};
