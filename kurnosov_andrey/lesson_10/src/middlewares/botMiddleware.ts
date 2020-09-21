import { Middleware } from 'redux';
import { ChatsActionTypes, ChatsActions, ChatsMessageSendAction } from '../actions/chats';
import { Delay } from '../logic/utils/Delay';

const botName = 'Голливуд';



const chatDelays: { [key: number]: Delay } = {}

export const botMiddleware: Middleware = store => next => (action: ChatsActions) => {
    if (action.type === ChatsActionTypes.CHATS_MESSAGE_SEND) {
        const message = action.payload.message;
        if (!message.isFromUser) {
            return next(action);
        }

        if (!chatDelays[message.chatId]) {
            chatDelays[message.chatId] = new Delay(3000);
        }

        const answer: ChatsMessageSendAction['payload']['message'] = {
            id: 0,
            chatId: message.chatId,
            text: 'Не пишите нам, мы сами вам напишем!', 
            author: botName,
            isFromUser: false          
        }
        chatDelays[message.chatId].start(() =>
            store.dispatch<ChatsMessageSendAction>({
                type: ChatsActionTypes.CHATS_MESSAGE_SEND,
                payload: {
                    message: answer
                }
            }), 'from-first');

    }

    return next(action);
};