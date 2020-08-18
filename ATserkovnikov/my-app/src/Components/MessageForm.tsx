import React, {ReactElement, useState} from "react";
import {Button} from "./Button";
import './MessageForm.css'

function MessageForm({ MessageFormData, AddMessageHandler}: MessageFormProps): ReactElement {
    const [messagedData, setMessageData] = useState(MessageFormData);

    return (<>
        <div className="message-form">
        <input onChange={(event)=>{setMessageData({Author: event.target.value, MessageText: messagedData.MessageText})}} type="text" placeholder="Автор" />
        <textarea onChange={(event => {setMessageData({MessageText: event.target.value, Author: messagedData.Author});
        })} placeholder="Сообщение"/>
        <Button addItem={() => {
            AddMessageHandler(messagedData)
        }}>Добавить
        </Button>
        </div>
    </>)
}

export {MessageForm}
