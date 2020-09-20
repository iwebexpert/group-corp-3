import {Middleware} from "redux";
import {ChatActionTypes, messageAdd, MessageAddAction} from "../actions/chats";

export const BotAnswerMiddleware: Middleware = store => next => action =>{
    if (action.type === ChatActionTypes.MESSAGE_ADD){
        const messagesAdd = (action as MessageAddAction).payload;

        const addBotMessage = (messagesAdd: MessagesAdd, botMessage: MessageData) => {
            setTimeout(() => {
                const newMessages = messagesAdd.messages.map(item => {
                    if (item.id === botMessage.id){
                        item.messageText = "Привет! " + messagesAdd.messages[messagesAdd.messages.length-2].author;
                    }
                    return item;
                });

                store.dispatch(messageAdd({...messagesAdd, messages: newMessages}));
            }, 5000)};

        const botMessages = messagesAdd.messages.filter(c => c.author === "Бот" && c.messageText === "");
        botMessages.map(botMessage => addBotMessage(messagesAdd, botMessage));
    }

    return next(action);
};
