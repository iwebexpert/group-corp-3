import React, { useState, useContext } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { AuthorizationContext } from '../Layout/AuthorizationContext';

export type MessageRequest = {
    message: string,
    author: string
};

type MessageFormState = {
    messageText: string,
};
export type MessggeFormProps = {
    messagePublished: (message: MessageRequest) => void
}
export const MessageForm: React.FC<MessggeFormProps> = (props) => {
    const [form, setForm] = useState<MessageFormState>({ messageText: '' });

    const auth = useContext(AuthorizationContext);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ messageText: event.target.value })
    };

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.messagePublished({ message: form.messageText, author: auth.userName });
        setForm({ messageText: '' });
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <Row>
                <Form.Group as={Col} controlId="formMessage">
                    <Form.Control type="text"
                        disabled={!auth.isLoggedIn}
                        value={form.messageText}
                        onChange={handleInputChange}
                        placeholder="Input message" />
                </Form.Group>
                <Col md={3}>
                    <Button variant="success" type="submit" disabled={!auth.isLoggedIn || form.messageText.length === 0} >Send</Button>
                </Col>
            </Row>
        </Form>);
}