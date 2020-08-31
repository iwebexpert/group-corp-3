import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

const InputMessage = ({onSend}: {onSend: (text: string) => void}) => {
    const [text, setText] = useState('');
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSend(text);
        setText('');
    }
    return (
        <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicInput">
                <Form.Control value={text} onChange={e => setText(e.target.value)}
                              placeholder="Type your message" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!text}>
                Send
            </Button>
        </Form>
    );
}

export default InputMessage;
