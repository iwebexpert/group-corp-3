import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {chatsAdding} from '../store/actions/actionType';


export const AddingChatForm: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const [validated, setValidated] = useState<boolean>(false);
    const [title, setTitle] = React.useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        setValidated(true);
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        if (form.checkValidity()) {
            setValidated(false);
            let chat = {title}
            dispatch(chatsAdding(chat));
            setTitle('');
        }
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    return (<div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label as='label'>Имя чата</Form.Label>
                <Form.Control
                    type='text'
                    className='form-control'
                    pattern='[a-zA-Zа-яА-ЯёЁ]{3,30}'
                    value={title}
                    placeholder={'Добавьте чат'}
                    required
                    onKeyDown={handleKeyDown}
                    onChange={e => setTitle(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>Поле Имя чата заполнено неверно</Form.Control.Feedback>
            </Form.Group>
        </Form>
    </div>);
}
