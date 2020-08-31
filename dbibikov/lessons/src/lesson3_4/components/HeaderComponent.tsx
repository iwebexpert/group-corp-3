import React, { useState } from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';
import { SettingsComponent } from './SettingsComponent';

function HeaderComponent(){

    return (
        <Container className="d-flex justify-content-between">
            <h2>Header</h2>
            <SettingsComponent/>
        </Container>
    );
};
export { HeaderComponent };