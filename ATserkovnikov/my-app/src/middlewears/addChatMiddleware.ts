import {Middleware} from "redux";
import {ChatActionTypes, ChatAddAction} from "../actions/chats";
import {push} from "connected-react-router";

export const AddChatMiddleware: Middleware = store => next => action =>{
    if (action.type === ChatActionTypes.CHAT_ADD){
        let chat = (action as ChatAddAction).payload;

        const newId = store.getState().chats.entries.length + 1;
        chat.id = newId;

        store.dispatch(push(`/chat/${newId}`));
    }

    return next(action);
};
