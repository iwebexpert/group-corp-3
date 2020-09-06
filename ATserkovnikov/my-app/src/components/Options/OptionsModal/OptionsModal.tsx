import React, {useState} from "react";
import {ChatThemeEnum, LangEnum, OptionsContext} from "../../../models";
import {Button, Form, Modal} from "react-bootstrap";
import {GearFill} from 'react-bootstrap-icons';

export const OptionsModal: React.FC<OptionsContext> = (options) => {
    const [show, setShow] = useState(false);
    const [curOptions, setOptions] = useState(options.options);
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const newState = {...curOptions, [event.target.name]: event.target.value};
        setOptions(newState);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newState = {...curOptions, [event.target.name]: event.target.checked};
        setOptions(newState);
    };

    const handleSubmitForm = (event: any) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;

        if (form.checkValidity()) {
            handleClose();
            options.changeContextHandle(curOptions);
        }

        event.stopPropagation();
        setValidated(true);
    };

    return (<>
            <GearFill style={{color: 'grey', cursor: 'pointer'}} onClick={handleShow}/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Настройки мессенджера</Modal.Title>
                </Modal.Header>

                <Form noValidate
                      validated={validated}
                      onSubmit={handleSubmitForm}
                >
                    <Modal.Body>
                        <Form.Group controlId="optionsForm.Author">
                            <Form.Control
                                type="text"
                                name="author"
                                value={curOptions.author}
                                onChange={handleInputChange}
                                placeholder="Введите автора"
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

                        <Form.Group controlId="optionsForm.SelectTheme">
                            <Form.Control
                                as="select"
                                value={curOptions.chatTheme}
                                name="chatTheme"
                                onChange={handleInputChange}
                                placeholder="Выберите тему"
                                required
                            >
                                <option/>
                                <option value={ChatThemeEnum.light}>Светлая тема</option>
                                <option value={ChatThemeEnum.dark}>Темная тема</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                                Выберите тему
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Не выберана тема
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="optionsForm.SelectLang">
                            <Form.Control
                                as="select"
                                name="lang"
                                value={curOptions.lang}
                                onChange={handleInputChange}
                                placeholder="Выберите язык"
                                required
                            >
                                <option/>
                                <option value={LangEnum.rus}>Русский</option>
                                <option value={LangEnum.eng}>Английский</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                                Выберите язык
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Не выбран язык
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="optionsForm.FormRule">
                            <Form.Check
                                type="switch"
                                name="confirmCondition"
                                checked={curOptions.confirmCondition}
                                onChange={handleCheckboxChange}
                                label="Согласен с праилами чата"
                                title="Необходимо согласится с правилами чата"
                            >
                            </Form.Check>
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Закрыть</Button>
                        <Button variant="primary" type="submit" onSubmit={handleSubmitForm}>
                            Сохранить
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};
