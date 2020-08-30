import React from "react";
import { MessageField } from "../MessageField/MessageField";

const MessagesList = (props: MessagesListProps) => {
    const { messages } = props;
    return (<>
        {messages.map((item: Message, index: number) =>
            <MessageField key={item.date.getDate() + index} message={item} />)}
    </>);
};

export { MessagesList };
