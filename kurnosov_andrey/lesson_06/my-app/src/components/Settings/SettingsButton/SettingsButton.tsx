import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import { LangText } from '../../../Langs';
import { SettingsModal } from '../SettingsModal/SettingsModal';

export const SettingsButton = ()=> {
    const [showModal, setShowModal] = useState<boolean>(false);
    return <>
        <Button onClick={() => setShowModal(true)}> <LangText text={{RU:'Настройки', EN:'Settings'}} /></Button>
        <SettingsModal show={showModal} onHide={() => setShowModal(false)}/>
    </>
}