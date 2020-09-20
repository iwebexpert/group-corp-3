import {Middleware} from "redux";
import {ChatActionTypes, MessageAddAction} from "../actions/chats";

export const ReadMiddleware: Middleware = store => next => action =>{
     if (action.type === ChatActionTypes.MESSAGE_ADD){
        const messagesAdd = (action as MessageAddAction).payload;

        const rootPath = store.getState().router.location.pathname;

        if (rootPath === `/chat/${messagesAdd.chatId}`){
            messagesAdd.unreadMessageCount = 0;
        } else {
            messagesAdd.unreadMessageCount = messagesAdd.messages.filter(c => !c.read).length;
        }
    }

    return next(action);
};
