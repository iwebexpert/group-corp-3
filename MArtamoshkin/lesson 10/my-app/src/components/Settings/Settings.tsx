import { Button, Modal, FormGroup, FormLabel, Form as BootstrapForm } from "react-bootstrap";
import React, { useState, FormEvent } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { editSettings } from "../../actions/settings";
import { AppState } from "../../reducers";

const SettingsSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Слишком короткое имя')
        .max(30, 'Слишком длинное имя')
        .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, 'Имя содержит недопустимые символы')
        .required('Имя не заполнено'),
    language: Yup.string().required('Поле язык не заполнено'),
    theme: Yup.string().required('Поле тема не заполнено')
});

const Settings = () => {
    const { t } = useTranslation();
   
    const dispatch = useDispatch();
    const { name, theme, language } = useSelector((state: AppState) => state.appSettings.settings);

    const [show, setShow] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>('');
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(editSettings({ name: userName }));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setUserName(e.target.value);
    };

    const closeHandler = (): void => setShow(false);
    const showHandler = (): void => setShow(true);

    return <>
        <div className="d-flex align-items-center">
            <BootstrapForm onSubmit={handleSubmit} className="mr-2">{name ? <b className="text-muted">{name}</b> :
                <BootstrapForm.Control name="name" type="input" autoComplete='off'
                    value={userName} onChange={handleChange} placeholder={t('USER_NAME')}></BootstrapForm.Control>}</BootstrapForm>
            <Button variant="outline-primary settings-btn" onClick={showHandler}>
                <i className="fas fa-cog"></i>
            </Button>
        </div>

        <Modal show={show} onHide={closeHandler} centered>
            <Modal.Header closeButton>
                <Modal.Title>{t('SETTINGS')}</Modal.Title>
            </Modal.Header>

            <Formik
                initialValues={{ name, language, theme }}
                validationSchema={SettingsSchema}
                onSubmit={(values: { name: string, theme: string, language: string }) => {
                    dispatch(editSettings({ ...values }))
                    closeHandler();
                }}
            >
                {({ errors, touched, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body>
                            <FormGroup>
                                <FormLabel htmlFor="name">{t('AUTHOR')}</FormLabel>
                                <Field name="name" id="name" className="form-control" autocomplete="off" />
                                {errors.name && touched.name ? (
                                    <div className="invalid-feedback d-block">{errors.name}</div>
                                ) : null}
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="language">{t('LANGUAGE_HEADING')}</FormLabel>
                                <Field as="select" name="language" className="form-control" placeholder={t('LANGUAGE_SELECT')}>
                                    <option value="ru">{t('LANGUAGE_RU')}</option>
                                    <option value="en">{t('LANGUAGE_EN')}</option>
                                </Field>
                                {errors.name && touched.name ? (
                                    <div className="invalid-feedback d-block">{errors.language}</div>
                                ) : null}
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="theme">{t('THEME_HEADING')}</FormLabel>
                                <Field as="select" name="theme" className="form-control" placeholder={t('THEME_SELECT')}>
                                    <option value="light">{t('THEME_LIGHT')}</option>
                                    <option value="dark">{t('THEME_DARK')}</option>
                                </Field>
                                {errors.name && touched.name ? (
                                    <div className="invalid-feedback d-block">{errors.theme}</div>
                                ) : null}
                            </FormGroup>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeHandler}>
                                {t('CLOSE')}
                            </Button>
                            <Button type="submit" variant="primary">
                                {t('SAVE')}
                            </Button>
                        </Modal.Footer>
                    </Form>
                )}
            </Formik>
        </Modal>
    </>

};

export { Settings };