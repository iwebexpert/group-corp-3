import React, {ReactElement, useRef, useState} from "react";
import {Button} from "./Button";
import './MessageForm.css'

function MessageForm({ MessageFormData, AddMessageHandler}: MessageFormProps): ReactElement {
    const [messagedData, setMessageData] = useState(MessageFormData);
    const authorElem = useRef<HTMLInputElement>(null);
    const messageElem = useRef<HTMLTextAreaElement>(null);

    return (<>
        <div className="message-form">
        <input ref={authorElem} onChange={(event)=>{setMessageData({Author: event.target.value, MessageText: messagedData.MessageText})}} type="text" placeholder="Автор" />
        <textarea ref={messageElem} onChange={(event => {setMessageData({MessageText: event.target.value, Author: messagedData.Author});
        })} placeholder="Сообщение"/>
        <Button addItem={() => {
            AddMessageHandler(messagedData);
            if (authorElem.current)
                authorElem.current.value = "";

            if (messageElem.current)
                messageElem.current.value = "";
        }}>Добавить
        </Button>
        </div>
    </>)
}

export {MessageForm}
