import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

import './MessageForm.scss'

export const MessageForm: React.FC<MessageFormProps> = ({ messageFormData, addMessageHandler}) => {
    const [messagedData, setMessageData] = useState(messageFormData);

    const addMessageHandlerClick = () => {
        addMessageHandler(messagedData);
        setMessageData({...messagedData, messageText: ''});
    };

    const handleTextareaEnter = (event: React.KeyboardEvent) =>{
        if (event.keyCode===13 && event.ctrlKey){
            addMessageHandler();
        }
    };

    return (
        <Form>
            <Form.Group>
                <Form.Control type="input" onChange={(event) => setMessageData({author: event.target.value, messageText: messagedData.messageText, key: ""})} placeholder="Автор" />
            </Form.Group>

            <Form.Group>
                <Form.Control as="textarea" rows={3} onKeyDown={handleTextareaEnter} onChange={(event => setMessageData({messageText: event.target.value, author: messagedData.author, key: ""}))} value={messagedData.messageText} placeholder="Сообщение" />
            </Form.Group>

            <Button variant="primary" disabled={!messagedData.messageText.length} onClick={addMessageHandlerClick}>Добавить</Button>
        </Form>
    );
};
