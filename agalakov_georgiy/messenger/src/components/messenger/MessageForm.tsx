import React, { useState } from 'react';
import './Messenger.scss';
import { MessageFormEntity } from './entities';
import { Button, Col, Form } from 'react-bootstrap';

type MessageFormProps = {
    addMessage: (messageForm: MessageFormEntity) => void
}

const defaultFormState: MessageFormEntity = {
    body: '',
    author: 'user'
}

const MessageForm: React.FC<MessageFormProps> = ({addMessage}) => {
    const [form, setForm] = useState<MessageFormEntity>(defaultFormState);


    const changeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, body: event.target.value})
    }

    const sendFormState = () => {
        if (form.body && form.author) {
            addMessage(form)
            setForm({...defaultFormState, author: form.author});
        }
    }

    return (
        <div className="message-form border-top">
            <form onSubmit={(e) => e.preventDefault()} className="row m-4">
                <Col>
                    <Form.Group className="mb-0">
                        <Form.Control placeholder="Message" value={form.body} onChange={changeBody}/>
                    </Form.Group>
                </Col>

                <div className="col-3 d-flex justify-content-center align-items-center">
                    <Button variant="primary" type="submit" onClick={sendFormState}>
                        Submit
                    </Button>
                </div>                
            </form>
            
        </div>
    )
}

export default MessageForm;