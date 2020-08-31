import React from 'react';
import {Modal} from 'react-bootstrap';

export const ModalApp: React.FC<any> = ({show, title = 'title', onCloseModal, children, footer = 'footer', isFooter}) => {

    const handleClose = () => {
        onCloseModal();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            {isFooter &&
            <Modal.Footer>
                {footer}
            </Modal.Footer>
            }
        </Modal>
    )
}

export default ModalApp;
