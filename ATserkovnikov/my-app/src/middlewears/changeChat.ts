import {Middleware} from "redux";
import {ChatActionTypes, ChangeChatAction, messageAdd} from "../actions/chats";
import {AppState} from "../reducers";

export const ChangeChatMiddleware: Middleware = store => next => action =>{
    if (action.type === ChatActionTypes.CHANGE_CHAT){
        const chatId = (action as ChangeChatAction).payload;

        const chat: Chat = (store.getState() as AppState).chats.entries.filter(c => c.id === chatId)[0];
        const newMessages: MessageData[] = chat.messages.messages.map(item => {
            item.read = true;
            return item;
        });

        store.dispatch(messageAdd({...chat.messages, messages: newMessages}));
    }

    return next(action);
};
