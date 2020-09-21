import {Middleware} from "redux";
import {ChatActionTypes, ChangeChatAction, MessageUpdateDB} from "../actions/chats";
import {AppState} from "../reducers";

export const ChangeChatMiddleware: Middleware = store => next => action =>{
    if (action.type === ChatActionTypes.CHANGE_CHAT){
        const chatId = (action as ChangeChatAction).payload;

        const chat: Chat = (store.getState() as AppState).chats.entries.filter(c => c.id === chatId)[0];
        chat.messages.map(item => {
            if (!item.read) {
                // @ts-ignore
                store.dispatch(MessageUpdateDB({...item, read: true}));
            }
        });
    }

    return next(action);
};
