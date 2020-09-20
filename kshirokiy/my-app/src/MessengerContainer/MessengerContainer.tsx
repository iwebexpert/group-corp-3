import React, {useState, useEffect, useContext} from 'react';
import '../Messenger/Messenger.scss';
import {Item, ItemWithId} from '../types/types';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../store/reducers/rootReducer';
import {chatsLoad, chatsMessageSend, sendMessage} from '../store/actions/actionType';
import {Messenger} from '../Messenger/Messenger';

export const MessengerContainer: React.FC<{}> = () => {
    const {id} = useParams<any>();
    const [routeChange, setRouteChange] = useState<boolean>(false);
    const dispatch = useDispatch();
    const messages = useSelector((state: AppState) => state.chats.chats[id] ? state.chats.chats[id].messages : []);
    const [isLoading, isError, lastAddMessage] = useSelector((state: AppState) =>
            ([state.chats.loading, state.chats.error, state.chats.lastAddMessage]));

    const handleMessageSend = (message: ItemWithId, isManual = false) => {
        if (message) {
            const {author, chatId = 0} = message;
            if (author !== 'Bot') {
                dispatch(sendMessage({...message, chatId: +chatId}));
            } else {
                if (isManual && (lastAddMessage && lastAddMessage.hasOwnProperty('chatId') &&
                    +lastAddMessage.chatId === +id)) {
                    window.setTimeout(() => {
                        dispatch(chatsMessageSend({
                            ...message
                        }));
                    }, 2000);
                }
            }
        }
    };

    useEffect(() => {
    }, [messages]);

    useEffect(() => {
        setRouteChange(false);
    }, [id]);

    return (<div className='messenger'>
        {id ? <Messenger items={messages}
                         isLoading={isLoading}
                         routeChange={routeChange}
                         paramId={id}
                         onSendHandler={handleMessageSend}/> : ''}
    </div>);
}
