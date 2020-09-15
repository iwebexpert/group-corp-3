import React, { FC } from 'react';
import { Button, Modal, FormGroup, FormLabel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import './SettingsModal.scss';

const SettingsSchema = Yup.object().shape({
  author: Yup.string()
    .min(3, 'SHORT_TEXT_ERROR')
    .max(30, 'LONG_TEXT_ERROR')
    .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, 'PATTERN_ERROR')
    .required('REQUIRED_ERROR'),
  theme: Yup.string().required('REQUIRED_ERROR'),
  language: Yup.string().required('REQUIRED_ERROR'),
});

export type SettingsModalProps = {
  settings: Settings;
  visible: boolean;
  theme?: Theme;
  onSettingsModalClose: () => void;
  onSettingsChange: (settings: Settings) => void;
};

export const SettingsModal: FC<SettingsModalProps> = ({
  settings,
  visible,
  theme = 'light',
  onSettingsModalClose,
  onSettingsChange,
}) => {
  const { t } = useTranslation();

  const handleSubmit = (values: {
    author: string;
    theme: Theme;
    language: Language;
  }) => {
    handleModalClose();
    onSettingsChange({
      user: {
        ...settings.user,
        name: values.author,
      },
      theme: values.theme,
      language: values.language,
    });
  };

  const handleModalClose = () => {
    onSettingsModalClose();
  };

  const modalClasses = classNames({
    'bg-white': theme === 'light',
    'bg-dark text-white': theme === 'dark',
  });

  return (
    <Modal show={visible} onHide={handleModalClose}>
      <Modal.Header className={modalClasses}>
        <Modal.Title>{t('SETTINGS')}</Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={
          {
            author: settings.user.name,
            theme: settings.theme,
            language: settings.language,
          } as any
        }
        validationSchema={SettingsSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, getFieldProps }) => (
          <Form>
            <Modal.Body className={modalClasses}>
              <FormGroup>
                <FormLabel>{t('AUTHOR')}</FormLabel>
                <Field
                  className="form-control"
                  name="author"
                  placeholder={t('INPUT_AUTHORS_NAME')}
                />
                {errors.author && touched.author ? (
                  <div className="invalid-feedback d-block">
                    {t(errors.author)}
                  </div>
                ) : null}
              </FormGroup>

              <FormGroup>
                <FormLabel>{t('THEME')}</FormLabel>
                <Field
                  className="form-control"
                  name="theme"
                  placeholder={t('CHOOSE_THEME')}
                  as="select"
                >
                  <option value="light">{t('LIGHT')}</option>
                  <option value="dark">{t('DARK')}</option>
                </Field>
                {errors.theme && touched.theme ? (
                  <div className="invalid-feedback d-block">
                    {t(errors.theme)}
                  </div>
                ) : null}
              </FormGroup>

              <FormGroup controlId="language">
                <FormLabel>{t('LANGUAGE')}</FormLabel>
                <Field
                  className="form-control"
                  name="language"
                  placeholder={t('CHOOSE_LANGUAGE')}
                  as="select"
                >
                  <option value="en">{t('ENGLISH')}</option>
                  <option value="ru">{t('RUSSIAN')}</option>
                </Field>
                {errors.language && touched.language ? (
                  <div className="invalid-feedback d-block">
                    {t(errors.language)}
                  </div>
                ) : null}
              </FormGroup>
            </Modal.Body>

            <Modal.Footer className={modalClasses}>
              <Button type="submit" variant="warning">
                {t('APPLY')}
              </Button>
              <Button variant="secondary" onClick={onSettingsModalClose}>
                {t('CLOSE')}
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
