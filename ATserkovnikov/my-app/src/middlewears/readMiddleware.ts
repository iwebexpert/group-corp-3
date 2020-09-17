import {Middleware} from "redux";
import {ChatActionTypes, MessageAddAction} from "../actions/chats";

export const ReadMiddleware: Middleware = store => next => action =>{
     if (action.type === ChatActionTypes.MESSAGE_ADD){
        let chat = (action as MessageAddAction).payload;

        const rootPath = store.getState().router.location.pathname;

        if (rootPath === `/chat/${chat.chatId}`){
            chat.unreadMessageCount = 0;
        } else {
            chat.unreadMessageCount = chat.messages.filter(c => !c.read).length;
        }
    }

    return next(action);
};
