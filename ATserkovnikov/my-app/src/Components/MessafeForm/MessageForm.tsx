import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

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

    return (
        <Form>
            <Form.Group>
                <Form.Control type="input" onChange={(event) => setMessageData({Author: event.target.value, MessageText: messagedData.MessageText})} placeholder="Автор" />
            </Form.Group>

            <Form.Group>
                <Form.Control as="textarea" rows={3} onKeyDown={handleTextareaEnter} onChange={(event => setMessageData({MessageText: event.target.value, Author: messagedData.Author}))} value={messagedData.MessageText} placeholder="Сообщение" />
            </Form.Group>

            <Button variant="primary" disabled={!messagedData.MessageText.length} onClick={handleMessageSend}>Добавить</Button>
        </Form>
    );
};
