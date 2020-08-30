import React, { useState } from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';
import { useInput } from '../../shared/useInput';
import { appSettingsService } from '../services/AppSettingsService';
import App from '../../App';
import { AppLang, AppTheme } from '../../shared/types';

function SettingsComponent(){
    const [show, setShow] = useState<boolean>(false);
    const userNameInput = useInput('');
    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);
    const [validated, setValidated] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        if(form.checkValidity()){
            appSettingsService.changeSettings({
                userName: userNameInput.value,
                lang:  AppLang.RU,
                theme: AppTheme.Dark
            });
            handleCloseModal();
        }
        setValidated(true)
    };

    return (
        <>
            <Button variant="info" size="sm" onClick={handleShowModal}>Настройки</Button>
            <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form noValidate onSubmit={handleSubmit} validated={validated}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="author"
                                placeholder="Username"
                                required
                                minLength={3}
                                maxLength={15}
                                pattern="[A-Za-z]+"
                                {...userNameInput.bind}
                            />
                            <Form.Control.Feedback type="invalid">Поле заполнено неверно</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Lang</Form.Label>
                            <Form.Control as="select">
                                <option>RU</option>
                                <option>ENG</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Theme</Form.Label>
                            <Form.Control as="select">
                                <option>RU</option>
                                <option>ENG</option>
                            </Form.Control>
                        </Form.Group>

                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>Закрыть</Button>
                        <Button variant="primary" disabled={(userNameInput.value.length < 1)} onClick={handleSubmit}>Применить</Button>
                    </Modal.Footer>
            </Modal> 
            </>
    );
};
export { SettingsComponent };