import React, { useState } from "react";

import './CreateMessage.scss';
import { Button, Form, InputGroup } from 'react-bootstrap';

const CreateMessage = (props: CreateMessageProps) => {
    const [message, setMessage] = useState<string>('');
    const {onSend} = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSend(message);
        setMessage('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="create-message">
                <Form.Control type={'text'} name="message" value={message} autoComplete='off' onChange={handleChange}
                              className="message-input rounded-0"
                              placeholder="Введите сообщение"/>
                <InputGroup.Append>
                    <Button variant={'light'} className="border message-submit rounded-0" type="submit"
                            disabled={!message.trim().length}>Отправить</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
};

export { CreateMessage };
