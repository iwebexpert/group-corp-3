import React, { useState } from "react";
import { Textarea } from "../../../../Common/Textarea";
import { Form, Button } from "react-bootstrap";


type Props = {
    onSend: (text: string) => void;
}

export function MessageForm(props: Props) {

    const [text, setText] = useState('');
    const clearText = () => setText('');

    const send = () => {
        if (text) {
            props.onSend(text);
            clearText();
        }
    }

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        send();
    }

    const onSendKeyPressHandler = (e: React.KeyboardEvent) => {
        if (e.ctrlKey && (e.keyCode === 11 || e.keyCode === 13)) {
            send();
        }
    }

    const buttonDisabled = !text;

    const textarea = {
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value || ''),
        value: text
    }
    return (
        <Form onSubmit={onSubmitHandler} onKeyUp={onSendKeyPressHandler} className="mt-3">
            <Form.Group>
                <Textarea  {...textarea} />
            </Form.Group>
            
            <small className="text-muted"> cntrl+enter для отправки </small>
            <Button disabled={buttonDisabled} className="float-right"> Отправить </Button>
        </Form>
    )
}