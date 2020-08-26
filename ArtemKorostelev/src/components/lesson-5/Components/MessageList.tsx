import React, {useEffect, useRef} from "react";
import {Card} from "react-bootstrap";

export type IMessage = {sender: string, text: string};
const MessageList = ({messages, currentSender}: {messages: IMessage[], currentSender: string}) => {

    const mesRef = useRef() as React.MutableRefObject<HTMLUListElement>

    useEffect(() => {
        mesRef.current.scrollTop = mesRef.current.scrollHeight;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages])

    return (
        <ul className='w-100 p-3 h-100' style={{overflowY: 'scroll'}} ref={mesRef}>
            {messages.map(m => m.sender === currentSender
                ? <Card style={{textAlign: 'right'}}>
                    <Card.Body>{m.text} : <b>me</b> </Card.Body>
                </Card>
                : <Card>
                    <Card.Body><b>{m.sender}</b> : {m.text}</Card.Body>
                </Card>
            )}
        </ul>
    );
}

export default MessageList;
