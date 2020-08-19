import React from "react";
import { Message } from "./MessageItem";

const MessagesList = (props: MessagesListProps) => {
    const {messages} = props;
    return (<>
        {messages.map((item: Message, index: number) => <Message key={item.date.getDate() + index} message={item}/>)}
    </>);
};

export { MessagesList };
