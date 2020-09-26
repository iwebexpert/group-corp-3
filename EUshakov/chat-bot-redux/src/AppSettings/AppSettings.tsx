import React, { useState } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';

export type AppSettingsProps = {
    login: (userName: string) => void,
    logout: () => void
}
type LanguageSelection = 'Russian' | 'English';
type ThemeSelection = 'Dark' | 'Light';
type AppSettingsState = {
    userName: string,
    userEmail: string,
    language: LanguageSelection,
    theme: ThemeSelection,
    showRegForm: boolean
}


export const AppSettings: React.FC<AppSettingsProps> = ({ login, logout }: AppSettingsProps) => {
    const [appSettings, setAppSettings] = useState<AppSettingsState>({
        userName: 'Dear me',
        userEmail: 'theUser@gmail.com',
        language: 'English',
        theme: 'Light',
        showRegForm: false
    });
    const handleShow = () => {
        setAppSettings({ ...appSettings, showRegForm: true });
    };
    const handleClose = () => {

        logout();
        setAppSettings({ ...appSettings, showRegForm: false });
    };
    const handleSave = () => {
        login(appSettings.userName);
        setAppSettings({ ...appSettings, showRegForm: false });
    }

    const gearIcon = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z" />
    </svg>;
    return <>
        <Button variant="info" onClick={handleShow}>
            {gearIcon}
        </Button>
        <Modal show={appSettings.showRegForm} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Chat settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form validated={true} noValidate>
                    <Form.Group controlId="userName">
                        <Form.Label >User name:</Form.Label>
                        <Form.Control type="text" required
                            minLength={3}
                            maxLength={30}
                            pattern="[A-Za-z\s]+"
                            value={appSettings.userName}
                            onChange={(ev) => setAppSettings({ ...appSettings, userName: ev.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="userEmail">
                        <Form.Label>Enter email:</Form.Label>
                        <Form.Control type="email" required
                            value={appSettings.userEmail}
                            onChange={(ev) => setAppSettings({ ...appSettings, userEmail: ev.target.value })} />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Language: </Form.Label>
                            <Form.Control as="select"
                                value={appSettings.language}
                                onChange={ev => setAppSettings({ ...appSettings, language: ev.target.value as LanguageSelection })}>
                                <option value={'Russian'}>Русский (RU)</option>
                                <option value={'English'}>English (EN)</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Theme: </Form.Label>
                            <Form.Control as="select"
                                value={appSettings.theme}
                                onChange={ev => setAppSettings({ ...appSettings, theme: ev.target.value as ThemeSelection })}>
                                <option>Dark</option>
                                <option>Light</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
            </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
}