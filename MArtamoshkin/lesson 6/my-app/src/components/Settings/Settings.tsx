import { Button, Modal, FormGroup, FormLabel } from "react-bootstrap";
import React, { useState, useContext } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { SettingsConsumer, SettingsContext } from "../../contexts/SettingsContext";

const SettingsSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Слишком короткое имя')
        .max(30, 'Слишком длинное имя')
        .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, 'Имя содержит недопустимые символы')
        .required('Имя не заполнено'),
    language: Yup.string().required('Поле язык не заполнено')
});

const Settings = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const { setSettingsContext } = useContext(SettingsContext);

    setSettingsContext({author: ' ', })
    return <>
        <Button variant="outline-primary" onClick={handleShow}>
            <i className="fas fa-cog"></i>
        </Button>

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Настройки</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{ name: '', language: '' }}
                    validationSchema={SettingsSchema}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <FormGroup>
                                <FormLabel htmlFor="name">Автор</FormLabel>
                                <Field name="name" id="name" className="form-control" />
                                {errors.name && touched.name ? (
                                    <div className="invalid-feedback d-block">{errors.name}</div>
                                ) : null}
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="language">Язык</FormLabel>
                                <Field as="select" name="language" className="form-control" placeholder="Выберите язык">
                                    <option value="ru">Русский</option>
                                    <option value="en">Английский</option>
                                </Field>
                                {errors.name && touched.name ? (
                                    <div className="invalid-feedback d-block">{errors.language}</div>
                                ) : null}
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="language">Тема</FormLabel>
                                <Field as="select" name="language" className="form-control" placeholder="Выберите язык">
                                    <option value="light">Светлая</option>
                                    <option value="dark">Темная</option>
                                </Field>
                                {errors.name && touched.name ? (
                                    <div className="invalid-feedback d-block">{errors.language}</div>
                                ) : null}
                            </FormGroup>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
          </Button>
                <Button variant="primary" onClick={handleClose}>
                    Сохранить
          </Button>
            </Modal.Footer>
        </Modal>
    </>

}

export { Settings };