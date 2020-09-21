import { Middleware } from 'redux';
import { ChatsActionTypes, ChatsActions, ChatsMessageSendAction, chatsMessageArrived, chatsReaded } from '../actions/chats';
import { Delay } from '../logic/utils/Delay';
import { LOCATION_CHANGE } from 'connected-react-router';

const chatDelays: { [key: number]: Delay } = {}
const LOC_CHANGE: string = LOCATION_CHANGE;

type Action = ChatsActions | {
    type: typeof LOCATION_CHANGE;
}

export const readChatMiddleware: Middleware = store => next => (action: Action) => {
    const path: string = store.getState().router.location.pathname;
    if (path.indexOf('chats') != -1) {
        
        const currentChatIdStr = path.split('/')[2];
        const currentChatId = currentChatIdStr ? parseInt(currentChatIdStr) : null;

        if (action.type === ChatsActionTypes.CHATS_MESSAGE_SEND) {
            const nextRes = next(action);
            const message = action.payload.message;
            if (!message.isFromUser && currentChatId != action.payload.message.chatId) {
                store.dispatch(chatsMessageArrived(action.payload.message))
            }
            return nextRes;
        }
        else if (action.type === LOCATION_CHANGE) {
            store.dispatch(chatsReaded(currentChatId));
        }
    }
    return next(action);
};