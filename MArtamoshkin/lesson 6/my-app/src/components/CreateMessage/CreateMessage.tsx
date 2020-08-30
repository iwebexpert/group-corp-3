import React, { useState, useRef, useContext } from "react";

import './CreateMessage.scss';
import { Button, Form, InputGroup, Popover, Overlay } from 'react-bootstrap';
import { SettingsContext } from "../../contexts/SettingsContext";
import { useTranslation } from "react-i18next";

const CreateMessage = (props: CreateMessageProps) => {
    const { t } = useTranslation();

    const { name } = useContext(SettingsContext);
    const [message, setMessage] = useState<string>('');
    const { onSend } = props;

    const [showWarning, setShowWarning] = useState<boolean>(false);
    const [warningTarget, setWarningTarget] = useState<HTMLElement | null>(null);
    const ref = useRef(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setMessage(e.target.value);

        if (!warningTarget) {
            setWarningTarget(e.target);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (name) {
            onSend(message);
            setMessage('');
        } else {
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 5000)
        }
    };

    return (
        <>
            <Overlay
                show={showWarning}
                target={warningTarget}
                placement="top"
                container={ref.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Content>
                        {t('USER_NAME_NOT_SET_WARN')}
                    </Popover.Content>
                </Popover>
            </Overlay>

            <Form onSubmit={handleSubmit}>
                <InputGroup ref={ref} className="create-message">
                    <Form.Control type={'text'} name="message" value={message} autoComplete='off' onChange={handleChange}
                        className="message-input rounded-0"
                        placeholder={t('ENTER_MESSAGE')} />

                    <InputGroup.Append>
                        <Button variant={'light'} className="border message-submit rounded-0" type="submit"
                            disabled={!message.trim().length}>{t('SEND')}</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </>);
};

export { CreateMessage };
