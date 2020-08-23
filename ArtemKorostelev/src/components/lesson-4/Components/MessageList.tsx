import React, {useEffect, useRef} from "react";

export type IMessage = {sender: string, text: string};
const MessageList = ({messages, currentSender}: {messages: IMessage[], currentSender: string}) => {

    const mesRef = useRef() as React.MutableRefObject<HTMLUListElement>

    useEffect(() => {
        mesRef.current.scrollTop = mesRef.current.scrollHeight;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages])

    return (
        <ul className='w-100 p-3 h-100' style={{overflowY: 'scroll'}} ref={mesRef}>
            {messages.map(m => m.sender === currentSender?
                <div style={{textAlign: 'right'}}>{m.text} : <b>me</b></div>:
                <div><b>{m.sender}</b> : {m.text}</div>
            )}
        </ul>
    );
}

export default MessageList;
