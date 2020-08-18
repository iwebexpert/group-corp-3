import React, { useState } from "react";
import { Message } from "./MessageItem";

const MessagesList = (props: MessagesListProps) => {
    const {messages} = props;
    return (<>
        {messages.map((item: Message) => <Message message={item}/>)}
    </>);
};

export { MessagesList };
