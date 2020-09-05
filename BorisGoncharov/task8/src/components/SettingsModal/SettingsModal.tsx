import React, { FC, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormField } from '../../hooks/useFormField';
import './SettingsModal.scss';
import classNames from 'classnames';

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
  const authorField = useFormField(settings.name);
  const themeField = useFormField(settings.theme);
  const languageField = useFormField(settings.language);

  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (form.checkValidity()) {
      onSettingsChange({
        name: authorField.value,
        theme: themeField.value,
        language: languageField.value,
      });
      handleModalClose();
    } else {
      setValidated(true);
    }
  };

  const handleModalClose = () => {
    setValidated(false);
    onSettingsModalClose();
  };

  const classes = classNames({
    'bg-dark text-light': theme === 'dark',
  });

  return (
    <Modal show={visible} onHide={handleModalClose}>
      <Modal.Header closeButton className={classes}>
        <Modal.Title>{t('SETTINGS')}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes}>
        <Form
          noValidate
          validated={validated}
          method="POST"
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="author">
            <Form.Label>{t('AUTHOR')}</Form.Label>
            <Form.Control
              type="text"
              name="author"
              placeholder="Input author's name"
              required
              minLength={3}
              maxLength={30}
              pattern="[a-zA-Zа-яА-ЯёЁ]+"
              {...authorField}
            />
            <Form.Control.Feedback type="invalid">
              {t('INVALID_FIELD')}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">{t('AUTHOR_SUBTEXT')}</Form.Text>
          </Form.Group>

          <Form.Group controlId="theme">
            <Form.Label>{t('THEME')}</Form.Label>
            <Form.Control as="select" required {...themeField}>
              <option value="light">{t('LIGHT')}</option>
              <option value="dark">{t('DARK')}</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {t('INVALID_FIELD')}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">{t('THEME_SUBTEXT')}</Form.Text>
          </Form.Group>

          <Form.Group controlId="language">
            <Form.Label>{t('LANGUAGE')}</Form.Label>
            <Form.Control as="select" required {...languageField}>
              <option value="en">{t('ENGLISH')}</option>
              <option value="ru">{t('RUSSIAN')}</option>
            </Form.Control>
            <Form.Text className="text-muted">
              {t('LANGUAGE_SUBTEXT')}
            </Form.Text>
          </Form.Group>

          <Button variant="warning" type="submit">
            {t('APPLY')}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
