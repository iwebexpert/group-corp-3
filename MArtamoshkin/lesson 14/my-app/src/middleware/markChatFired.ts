import { Middleware } from "redux";
import { LOCATION_CHANGE } from "connected-react-router";
import { matchPath } from "react-router-dom";
import { AppState } from "../reducers";
import { chatsSetIsFired } from "../actions/chats";

export const chatMiddleware: Middleware = store => next => action => {
    const result = next(action);

    if (action.type === LOCATION_CHANGE) {
        const chatLocation = matchPath<ChatParams>(action.payload.location.pathname, { path: '/chat/:id' });
        if (chatLocation) {
            const chat: Chat = (store.getState() as AppState).chats.items.filter((chat: Chat) => chat.id === Number(chatLocation.params.id))[0];
            
            if(chat && !chat.isFired) {
                store.dispatch(chatsSetIsFired(chat.id, true));
            }
        }
    }

    return result;
};