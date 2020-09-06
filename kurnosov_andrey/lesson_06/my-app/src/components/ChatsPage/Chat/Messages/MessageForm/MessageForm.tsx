import React, { useState } from "react";
import { Textarea } from "../../../../Common/Textarea";
import { Form, Button } from "react-bootstrap";


type Props = {
    onSend: (text: string) => void;
}

export function MessageForm(props: Props) {

    const [text, setText] = useState('');
    const [validated, setValidated] = useState(false);
    const clearText = () => setText('');

    const send = () => {
        if (text) {
            setValidated(false);
            props.onSend(text);
            clearText();
        } else {
            setValidated(true);
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

    const textarea = {
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value || ''),
        value: text,
        id: "inputGroupPrepend",
        required: true
    }
    return (
        <Form 
            onSubmit={onSubmitHandler} 
            onKeyUp={onSendKeyPressHandler} 
            validated={validated}
            className="mt-3"
        >
            <Form.Group>
                <Textarea  {...textarea}/>

                <Form.Control.Feedback 
                    type="invalid" 
                    aria-describedby="inputGroupPrepend"
                >
                    Пожалуйста, введите сообщение.
                </Form.Control.Feedback>
            </Form.Group>
            
            <small className="text-muted"> cntrl+enter для отправки </small>
            <Button type="submit" className="float-right"> Отправить </Button>
        </Form>
    )
}