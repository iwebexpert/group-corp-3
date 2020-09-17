import React, { MouseEvent} from "react";
import classNames from 'classnames';
import { Image } from 'react-bootstrap';

import './ChatList.scss';
import { NewChat } from "./NewChat/NewChat";
import { AppState } from "../../reducers";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { chatsDelete } from "../../actions/chats";
import { push } from "connected-react-router";

const ChatList = (props: ChatListProps) => {
    const { activeChatId } = props;
    const { t } = useTranslation();
    const chats = useSelector<AppState, Chat[]>((state: AppState) => state.chats.items);

    const dispatch = useDispatch();

    const handleDeleteChat = (e: MouseEvent<HTMLElement>, id: number): void => {
        e.preventDefault();
        e.stopPropagation()

        dispatch(push('/chat'));
        dispatch(chatsDelete(id));
    };

    const handleClickOnChat = (chatId: number) => {
        dispatch(push(`/chat/${chatId}`));
    }

    return (<div className="d-flex justify-content-between flex-column h-100">
        <div className="chat-list">
            {chats.map((chat: Chat) => <div onClick={() => handleClickOnChat(chat.id)}  key={chat.id} className="active-chat">
                <div className={classNames('chat-field', { 'active-chat': chat.id === activeChatId, 'not-fired': !chat.isFired })}>
                    <div className="chat-people">
                        <div className="avatar"><Image src={chat.author.avatar} alt="Avatar" rounded /></div>
                        <div className="chat-ib">
                            <h5>{chat.author.name}<span className="float-right"><span
                                className="chat-date">{!!chat.messages.length && new Date(chat.messages[chat.messages.length - 1].date).toLocaleDateString('ru-RU')}</span><i className="fas ml-2 remove-chat fa-trash float-right" onClick={(e) => handleDeleteChat(e, chat.id)}></i></span></h5>
                            {<p className="text-truncate chat-text">
                                {chat.isTyping && <>{t('TYPING')}</>}
                                {chat.messages.length && !chat.isTyping ? chat.messages[chat.messages.length - 1].text : ''}
                            </p>}
                        </div>
                    </div>
                </div>
            </div>)
            }
        </div>
        <NewChat />
    </div>
    );
};

export { ChatList };
