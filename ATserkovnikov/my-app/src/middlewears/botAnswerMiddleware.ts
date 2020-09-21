import {Middleware} from "redux";
import {ChatActionTypes, MessageAddAction, MessageUpdateDB } from "../actions/chats";

export const BotAnswerMiddleware: Middleware = store => next => action =>{
    if (action.type === ChatActionTypes.MESSAGES_ADD_SUCCESS){
        const messagesAdd = (action as MessageAddAction).payload;

        const addBotMessage = (messagesAdd: MessageData) => {
            setTimeout(() => {
                messagesAdd.messageText = "Привет! Андрей";

                const rootPath = store.getState().router.location.pathname;
                messagesAdd.read = rootPath === `/chat/${messagesAdd.chatId}`;

                // @ts-ignore
                store.dispatch(MessageUpdateDB(messagesAdd));
            }, 5000)};

        if (messagesAdd.author === "Бот")
            addBotMessage(messagesAdd);
    }

    return next(action);
};
