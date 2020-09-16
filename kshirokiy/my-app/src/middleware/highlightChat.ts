import {Middleware} from 'redux';

export const highlightChatMiddleware: Middleware = store => next => action => {
    if (action.type === 'CHATS_MESSAGE_SEND' && action.payload.author === 'Bot') {
        action.payload.answerBot = true;
    }
    const result = next(action);
    return result;
}
