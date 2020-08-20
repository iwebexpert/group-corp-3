import React, { useState } from "react"
import { UserModel } from "../models/UserModel"
import { MessageModel } from "../models/MessageModel"
import { Row, Col, Form, Button } from "react-bootstrap"

export interface MessageCreateProps {
    author: UserModel;
    onCreate: (message: MessageModel) => void
}

export const MessageCreate: React.FC<MessageCreateProps> = (props: MessageCreateProps) => {

    const [message, setMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    const sendMessage = () => {
        props.onCreate({
            author: props.author,
            text: message
        })

        setMessage('');
    }

    return <Row>
        <Col>
            <Form.Control
                className="col-12"
                placeholder="Сообщение"
                onChange={handleChange}
                value={message}
            />
        </Col>
        <Col>
            <Button disabled={!message} type="button" className="col-12" onClick={() => sendMessage()}>
                Отправить
                    </Button>
        </Col>
    </Row>
}