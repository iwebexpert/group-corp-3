import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './ModalSettings.css';
import { SettingsForm } from "../SettingsForm";

export const ModalSettings: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    return (
        <>
            <Button variant="info" size="sm" onClick={handleShowModal} className="button-settings">
                Configuración</Button>
            
            <Modal show={show} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Configuración</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SettingsForm onCloseModal={handleCloseModal} />
                    </Modal.Body>
            </Modal>
        </>
    );
}