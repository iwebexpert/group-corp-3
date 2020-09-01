import React from "react";
import { MessageField } from "../MessageField/MessageField";

const MessagesList = (props: MessagesListProps) => {
    const { messages, contactPerson } = props;
    return (<>
        {(!messages || !messages.length) && <h4 className="text-center no-messages">Сообщений нет</h4>}

        {messages.map((item: Message, index: number) =>
            <MessageField key={new Date(item.date).getDate() + index} message={item} contactPerson={contactPerson} />)}
    </>);
};

export { MessagesList };
