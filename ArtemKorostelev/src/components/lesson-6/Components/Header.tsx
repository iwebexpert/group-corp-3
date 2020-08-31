import React from 'react';
import {Card} from "react-bootstrap";
import Settings from "./Settings";

export type HeaderProps = {
    title: string;
    onModalSubmit: any;
};

export const Header = ({ title, onModalSubmit }: HeaderProps) => {



    return (
        <>
            <Card>
                <Card.Body>{title}</Card.Body>
            </Card>

            <Settings onModalSubmit={onModalSubmit} />
        </>
    );
};
