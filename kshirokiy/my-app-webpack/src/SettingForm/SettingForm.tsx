import React, {useContext, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {ConfigAppContext} from '../App';

export const SettingForm: React.FC<any> = ({ onCloseModal }) => {
    const [lang, setLang] = React.useState<string | null>(null);
    const [theme, setTheme] = React.useState<string | null>(null);
    const [author, setAuthor] = React.useState<string>('');
    const [validated, setValidated] = useState<boolean>(false);
    const { changeContext } = useContext(ConfigAppContext);

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        setValidated(true);
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;

        if (form.checkValidity()) {
            setValidated(false);
            changeContext({
                lang,
                theme,
                author,
            });
            onCloseModal();
        }
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    const onChangeRadioTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(event.target.value);
    };

    const onChangeRadioLang = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLang(event.target.value);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label as='label'>Автор</Form.Label>
                <Form.Control
                    type='text'
                    className='form-control'
                    pattern="[a-zA-Zа-яА-ЯёЁ]{3,30}"
                    value={author}
                    required
                    onKeyDown={handleKeyDown}
                    onChange={e => setAuthor(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>Поле Автор заполнено неверно</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label as='label'>
                    Выберите тему
                </Form.Label>
                <Form.Check
                    required
                    type='radio'
                    label='Light'
                    value='Light'
                    name='theme'
                    onChange={onChangeRadioTheme}
                />
                <Form.Check
                    required
                    type='radio'
                    label='Dark'
                    value='Dark'
                    name='theme'
                    onChange={onChangeRadioTheme}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label as='label'>
                    Выберите язык приложения
                </Form.Label>
                <Form.Check
                    required
                    type='radio'
                    label='Ru'
                    value='Ru'
                    name='lang'
                    onChange={onChangeRadioLang}
                />
                <Form.Check
                    required
                    type='radio'
                    label='En'
                    value='En'
                    name='lang'
                    onChange={onChangeRadioLang}
                />
            </Form.Group>
            <Button variant='success' type='submit'>Отправить сообщение</Button>
        </Form>
    );
}
