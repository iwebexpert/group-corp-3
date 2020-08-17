import React, { useState } from 'react';
import { Messages } from './Messages';

function Chat(){

    const [msgs, setMessages] = useState(['']);

    return (
        <>
            <Messages items={msgs} />
            <button onClick={() => { setMessages([...msgs,'¡Hola a todos!']);}}>Say Hola</button>   
        </>
    );
}

export { Chat }