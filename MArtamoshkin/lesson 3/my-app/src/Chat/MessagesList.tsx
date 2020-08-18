import React, { useState } from "react";
import { Message } from "./Message";

const MessagesList = () => {
    const [messagesList, setMessagesList] = useState<Message[]>([{} as any, {} as any]);

    return (<>
        {messagesList.map((item: any) => <Message author={{isMe: true, avatar: ''}} message={{} as any}/>)}
    </>);
};

export { MessagesList };
