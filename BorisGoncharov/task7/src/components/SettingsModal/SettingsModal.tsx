import React, { FC, useContext, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { SettingsContext } from '../../contexts/SettingsContext';
import { useFormField } from '../../hooks/useFormField';
import './SettingsModal.scss';

export type SettingsModalProps = {
  visible: boolean;
  onSettingsModalClose: () => void;
};

export const SettingsModal: FC<SettingsModalProps> = ({
  visible,
  onSettingsModalClose,
}) => {
  const { name, setName, theme, setTheme, language, setLanguage } = useContext(
    SettingsContext
  );

  const authorField = useFormField(name);
  const themeField = useFormField(theme);
  const languageField = useFormField(language);

  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (form.checkValidity()) {
      setName(authorField.value);
      setTheme(themeField.value);
      setLanguage(languageField.value);
      handleModalClose();
    } else {
      setValidated(true);
    }
  };

  const handleModalClose = () => {
    setValidated(false);
    onSettingsModalClose();
  };

  return (
    <Modal show={visible} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          validated={validated}
          method="POST"
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
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
              This field is required
            </Form.Control.Feedback>
            <Form.Text className="text-muted">Input author's name</Form.Text>
          </Form.Group>

          <Form.Group controlId="theme">
            <Form.Label>Theme</Form.Label>
            <Form.Control as="select" required {...themeField}>
              <option>Light</option>
              <option>Dark</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              This field is required
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              Selected theme will be applied on restart application
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="language">
            <Form.Label>Language</Form.Label>
            <Form.Control as="select" required {...languageField}>
              <option>En</option>
              <option>Ru</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Select preferred language
            </Form.Text>
          </Form.Group>

          <Button variant="warning" type="submit">
            Apply
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
