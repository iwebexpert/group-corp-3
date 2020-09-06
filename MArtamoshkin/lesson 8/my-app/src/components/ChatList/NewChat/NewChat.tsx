import React, { useRef, useState } from "react";
import { Popover, Overlay, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { chatsNew } from "../../../actions/chats";
import { AppState } from "../../../reducers";

export const NewChat = () => {
    const [showCreateChat, setShowCreateChat] = useState<boolean>(false);
    const [createChatTarget, setCreateChatTarget] = useState<HTMLElement | null>(null);
    const ref = useRef(null);

    const dispatch = useDispatch();

    const handleClickCreateChat = (e: any) => { // TODO: type
        if (!createChatTarget) {
            setCreateChatTarget(e.target);
        }

        setShowCreateChat(true)
    }

    const chatIds = useSelector((state: AppState) => state.chats.items.map((item: Chat): number => item.author.id));
    const authors: Author[] = useSelector((state: AppState) => state.users.items.filter((u: User) => !chatIds.includes(u.id)));

    const handleCreateChat = (author: Author): void => {
        dispatch(chatsNew(author));
        setShowCreateChat(false);
    };

    return <>
        <Overlay
            show={showCreateChat}
            target={createChatTarget}
            placement="top"
            container={ref.current}
            containerPadding={20}
        >
            <Popover id="popover-contained" className="create-chat-popover">
                <Popover.Content className="p-0 text-center">
                    {!!authors.length ? authors.map((author: Author) => <div onClick={() => handleCreateChat(author)} className="user py-1 px-2 d-flex align-items-center">
                        <Image className="avatar" src={author.avatar} rounded/><span className="ml-2">{author.name}</span></div>) : <span className="p-5 text-center">Все чаты активны</span>}
                </Popover.Content>
            </Popover>
        </Overlay>

        <div className="add-new-chat chat-field text-center d-flex justify-content-between"
            onClick={handleClickCreateChat}>
            <div><span>Новый чат </span></div>
            <div><i className="fas fa-plus"></i></div>
        </div>
    </>;
}