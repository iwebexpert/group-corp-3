import React, {useContext, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {ConfigAppContext} from '../App';

export const MessageField: React.FC<any> = ({onSendHandler}) => {
    const [message, setMessage] = React.useState<string>('');
    const [author, setAuthor] = React.useState<string>('');
    const [validated, setValidated] = useState<boolean>(false);

    const {setting} = useContext(ConfigAppContext);

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        setValidated(true);
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;

        if (form.checkValidity()) {
            setValidated(false);
            onSendHandler({message, author: (!isAuthor() ? author : setting.author)});
            setAuthor('');
            setMessage('');
        }
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    const isAuthor = () => {
        return !(setting.author.trim() === '');
    }

    return (
        <Form noValidate validated={validated} method='POST' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type='text'
                    className='form-control'
                    placeholder='Автор'
                    value={!isAuthor() ? author : setting.author}
                    readOnly={!isAuthor() ? false : true}
                    required
                    onKeyDown={handleKeyDown}
                    onChange={e => setAuthor(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>Поле Автор заполнено неверно</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type='text'
                    className='form-control'
                    placeholder='Сообщение'
                    value={message}
                    required
                    onKeyDown={handleKeyDown}
                    onChange={e => setMessage(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>Поле Сообщение заполнено неверно</Form.Control.Feedback>
            </Form.Group>
            <Button variant='success' type='submit'>Отправить сообщение</Button>
        </Form>
    );
}
