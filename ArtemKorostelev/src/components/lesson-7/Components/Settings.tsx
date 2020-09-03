import {Button, Modal, FormGroup, FormLabel, Row} from "react-bootstrap";
import React, { useState, useContext } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { SettingsContext } from "../Contexts/settings";

const SettingsValidation = Yup.object().shape({
    name: Yup.string()
        .min(5, 'too short')
        .required('Name required'),
    language: Yup.string().required('language is required')
});

const Settings = ({onModalSubmit}: { onModalSubmit: any }) => {

    const [show, setShow] = useState<boolean>(false);
    const closeHandler = (): void => setShow(false);
    const showHandler = (): void => setShow(true);
    const submitFormContext = (values: any): void => {
        onModalSubmit({
            name: values.name,
            language: values.language
        });
    }
    const { language, name } = useContext(SettingsContext);

    return <>
        <Row>
            <Button variant="outline-primary" onClick={showHandler}>
                Open Settings
            </Button>
        </Row>

        <Modal show={show} onHide={closeHandler} centered>
            <Modal.Header closeButton>
                <Modal.Title>Settings</Modal.Title>
            </Modal.Header>

            <Formik
                initialValues={{ name, language }}
                validationSchema={SettingsValidation}
                onSubmit={(values: { name: string, language: string }) => {
                    submitFormContext(values);
                    closeHandler();
                }}
            >
                {({ errors, touched, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <FormGroup>
                                <FormLabel htmlFor="name">Author</FormLabel>
                                <Field name="name" id="name" className="form-control" />
                                {
                                    errors.name && touched.name
                                    ? <div>{errors.name}</div>
                                    : null
                                }
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="language">Language</FormLabel>
                                <Field as="select" name="language" className="form-control">
                                    <option value="ru">RU</option>
                                    <option value="en">EN</option>
                                </Field>
                                {
                                    errors.name && touched.name
                                        ? <div>{errors.language}</div>
                                        : null
                                }
                            </FormGroup>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button type="submit" variant="primary">
                                save
                            </Button>
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </Modal>
    </>

}

export default Settings;
