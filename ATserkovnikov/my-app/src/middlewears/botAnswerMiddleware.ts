import {Middleware} from "redux";
import {ChatActionTypes, messageAdd, MessageAddAction} from "../actions/chats";

export const BotAnswerMiddleware: Middleware = store => next => action =>{
    if (action.type === ChatActionTypes.MESSAGE_ADD){
        const chat = (action as MessageAddAction).payload;

        const addBotMessage = (chat: MessagesListData, message: MessageData) => {
            setTimeout(() => {
                const newMessages = chat.messages.map(item => {
                    if (item.key === message.key){
                        item.messageText = "Привет! " + chat.authors[chat.authors.length-1];
                    }
                    return item;
                });

                store.dispatch(messageAdd({...chat, messages: newMessages}));
            }, 5000)};

        const botMessages = chat.messages.filter(c => c.author === "Бот" && c.messageText === "");
        botMessages.map(message => addBotMessage(chat, message));
    }

    return next(action);
};
