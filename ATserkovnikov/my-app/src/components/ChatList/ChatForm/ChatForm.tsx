import React, {useContext, useState} from "react";
import {useFormValue} from "../../../hooks/useFormValue";
import {Button, Form} from "react-bootstrap";
import {ConfigContext} from "../../../App";
import {useDispatch} from "react-redux";
import {chatAdd} from "../../../actions/chats";

import './ChatForm.scss'

export const ChatForm : React.FC = () => {
    const {options} = useContext(ConfigContext);
    const chatNameField = useFormValue("");
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();

    const checkCondition = options.confirmCondition;

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;

        if (form.checkValidity()) {
            dispatch(chatAdd(chatNameField.value));
            chatNameField.setValues("");
        }

        event.stopPropagation();
        setValidated(true);
    };

    return (
        <Form noValidate
              validated={validated}
              method="POST"
              onSubmit={handleSubmit}
        >
            <Form.Group>
                <Form.Control
                    type="input"
                    {...chatNameField}
                    disabled={!checkCondition}
                    placeholder="Введите название чата"
                    required
                    minLength={3}
                    maxLength={30}
                    pattern="[a-zA-Zа-яА-ЯёЁ]*"
                />
                <Form.Control.Feedback type="invalid">
                    Не заполнено поле название чата
                </Form.Control.Feedback>
            </Form.Group>

            <Button
                type="submit"
                variant="success"
                disabled={!checkCondition}
            >
                Добавить
            </Button>
        </Form>
    );
};
