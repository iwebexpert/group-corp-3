import {action, observable} from "mobx";
import {ChatsDB} from "../helpers/ChatsDB";

export class ChatStore {
    @observable chats: Chat[] = ChatsDB;

    @action addChat = (chatName: string) => {
        const newId = this.chats.length + 1;
        const newChat: Chat = {
            id: newId,
            title: chatName,
            description: chatName,
            messages: {
                messages: [],
                authors: [],
                chatId: newId
            }
        };

        this.chats.push(newChat);
    };

    @action addMessages = (messages: MessagesListData) => {
        this.chats = this.chats.map(item => {
            if (item.id === messages.chatId){
                item.messages = messages;
            }
            return item;
        });
    };
}

