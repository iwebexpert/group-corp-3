import { chatsSetIsFired, chatsSetIsTyping } from './../actions/chats';
import { AnyAction, Middleware } from "redux";
import { ChatsActionTypes } from "../actions/chats";
import { AppState } from "../reducers";
import { getFakeResponse } from "../common/fakeResponse";
import { matchPath } from 'react-router-dom';
import { chatsMessageSend } from '../actions/chats/messageSend';
import { ThunkDispatch } from 'redux-thunk';

type ThunkDispatchType = ThunkDispatch<{}, {}, AnyAction>;

const responseState: { [chatId: number]: NodeJS.Timeout; } = {};
const isTypingState: { [chatId: number]: NodeJS.Timeout; } = {};

export const autoResponseMiddleware: Middleware = store => next => action => {
    const result = next(action);

    const typingTimeout = 3 * 1000;
    const responseTimeout = (Math.random() * 5) * 1000 + typingTimeout;

    if (action.type === ChatsActionTypes.CHATS_MESSAGE_SEND_SUCCESS) {
        const { chatId, isResponse } = action.payload;

        if (responseState[chatId]) {
            clearTimeout(responseState[chatId]);
            clearTimeout(isTypingState[chatId]);
        }

        if (!isResponse) {
            isTypingState[chatId] = setTimeout(() => {
                store.dispatch(chatsSetIsTyping(chatId, true));
            }, typingTimeout);

            responseState[chatId] = setTimeout(() => {
                const chat: Chat = (store.getState() as AppState).chats.items.filter((chat: Chat) => chat.id === chatId)[0];
                const newResponse: Message = getFakeResponse(chat.responseStep + 1, chat.author.id);

                const activeChat = matchPath<ChatParams>((store.getState() as AppState).router.location.pathname, { path: '/chat/:id' });

                const thunkDispatch = store.dispatch as ThunkDispatchType;
                thunkDispatch(chatsMessageSend(newResponse, chatId, true));
                store.dispatch(chatsSetIsTyping(chatId, false));

                if (activeChat && Number(activeChat.params.id) !== chatId) {
                    store.dispatch(chatsSetIsFired(chatId, false));
                }
            }, responseTimeout);
        }
    }

    return result;
};
