import React, { Fragment, ReactElement, MouseEventHandler, ReactNode, useRef } from 'react';

type Props = {
    sendMessageHandle: (message: MessageProps) => void
}

export function SendMessage ({ sendMessageHandle }: Props){

    const textRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);



    const sendMessage = () => {
        if (textRef.current && authorRef.current) {
        const newMessage: MessageProps = {
            text: textRef.current.value || '',
            author: authorRef.current.value || '',
          };
        textRef.current.value = '';
        sendMessageHandle(newMessage);
        }
    }

    return(
        <>
            <hr/>
            <br/>
            <div>
                Автор:
                <input ref={authorRef}></input>
            </div>
            <br/>
            <div>
                Сообщение:
                <input  ref={textRef}></input>
            </div>
            <br/>
            <button onClick={ sendMessage }>Отправить</button>
        </>
    )
}


