import React, { useState } from "react";
import { Message } from "./Message";

const MessagesList = () => {
    const [messagesList, setMessagesList] = useState<string[]>([]);

    const addHandler = () => setMessagesList([...messagesList, 'Нормально'])
    return (<>
        {messagesList.map((item: string) => <Message text={item} />)}
        <button onClick={addHandler}>Add message</button>
    </>)
}

export { MessagesList };