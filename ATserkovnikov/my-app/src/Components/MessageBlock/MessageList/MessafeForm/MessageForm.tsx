import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useFormValue} from "../../../../Hooks/useFormValue";
import {generate} from "shortid";
import './MessageForm.scss'

export const MessageForm: React.FC<MessageFormProps> = ({ messageFormData, addMessageHandler, checkCondition}) => {
    const authorField = useFormValue(messageFormData.author);
    const messageTextField = useFormValue(messageFormData.messageText);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;

        if (form.checkValidity()) {
            addMessageHandler({key: generate(), author: authorField.value, messageText: messageTextField.value});
            messageTextField.setValue("");
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
                    {...authorField}
                    readOnly={authorField.value !== ""}
                    disabled={!checkCondition}
                    placeholder="Введите имя автора"
                    required
                    minLength={3}
                    maxLength={30}
                    pattern="[a-zA-Zа-яА-ЯёЁ]*"
                />
                <Form.Text className="text-muted">
                    Введите имя автора
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Не заполнено поле автор
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    rows={3}
                    {...messageTextField}
                    disabled={!checkCondition}
                    placeholder="Введите текст сообщения"
                    required
                    minLength={3}
                />
                <Form.Text className="text-muted">
                    Введите текст сообщения
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Не заполнено поле сооющение
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
