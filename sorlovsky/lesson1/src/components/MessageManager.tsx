import React, { useState } from 'react';
import { Messages } from './Messages';
import { Button2 } from './Button2';

function MessageManager(){


    const [messages, setMessage] = useState<string[]>([]);
    const addMessageHandler = (text: string) => setMessage(messages.concat(text));

    return (
        <>
            <Messages items={messages} />
            <Button2 callback={() => {addMessageHandler("Test Message @ " + Date.now())}}>Send message</Button2>
        </>
    );
}

export { MessageManager }