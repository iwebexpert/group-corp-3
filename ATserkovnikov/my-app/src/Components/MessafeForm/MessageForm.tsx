import React, {useState} from "react";

import './MessageForm.scss'

export const MessageForm: React.FC<MessageFormProps> = ({ MessageFormData, AddMessageHandler}) => {
    const [messagedData, setMessageData] = useState(MessageFormData);

    const addMessageHandler = () => {
        AddMessageHandler(messagedData);
        setMessageData({...messagedData, MessageText: ''});
    };

    const handleTextareaEnter = (event: React.KeyboardEvent) =>{
        if (event.keyCode===13 && event.ctrlKey){
            addMessageHandler();
        }
    };

    const handleMessageSend = () => addMessageHandler();

    return (<>
        <div className="message-form">
            <div>
                <input onChange={(event) => setMessageData({Author: event.target.value, MessageText: messagedData.MessageText})} type="text" placeholder="Автор" />
            </div>
            <div>
                <textarea onKeyDown={handleTextareaEnter} onChange={(event => setMessageData({MessageText: event.target.value, Author: messagedData.Author}))} rows={10} value={messagedData.MessageText} placeholder="Сообщение"/>
            </div>
            <button disabled={!messagedData.MessageText.length} onClick={handleMessageSend}>Добавить</button>
        </div>
    </>)
};
