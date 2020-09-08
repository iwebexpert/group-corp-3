import React, {useState, useEffect, useContext} from 'react';
import '../Messenger/Messenger.scss';
import {Item, ItemWithId} from '../types/types';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../store/reducers/rootReducer';
import {chatsLoad, chatsMessageSend} from '../store/actions/actionType';
import {Messenger} from '../Messenger/Messenger';

export const MessengerContainer: React.FC<{}> = () => {
    let {id} = useParams<any>();
    const [routeChange, setRouteChange] = useState<boolean>(false);

    const dispatch = useDispatch();
    const messages = useSelector((state: AppState) => state.chats.chats[id] ? state.chats.chats[id].messages : []);

    const handleMessageSend = (message: ItemWithId) => {
        dispatch(chatsMessageSend({
            ...message
        }));
        setRouteChange(true)
    };

    useEffect(() => {
        dispatch(chatsLoad());
    }, []);

    useEffect(() => {
        setRouteChange(false);
    }, [id]);

    return (<div className='messenger'>
        {id ? <Messenger items={messages}
                         routeChange={routeChange}
                         paramId={id}
                         onSendHandler={handleMessageSend}/> : ''}

    </div>);
}
