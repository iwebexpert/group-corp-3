import React, { useState, ReactElement } from 'react';
import { Message } from './Message';
import { Button } from './Button';

type Props = {
    items: string[];
}

function Messages(): ReactElement{

    const [messages, setMessage] = useState<string[]>([]);

    return (<>
        {messages.map((item: string) => <Message text={item}/>)}
        <Button text="Сообщение"  callback={ ()=>{
            setMessage([...messages, 'Some text']);
        } }><b>на кнопке</b></Button>
    </>);
}

export { Messages };