import React from 'react';
import {Card} from "react-bootstrap";

export type HeaderProps = {
    title: string;
};

export const Header = ({ title }: HeaderProps) => {
    return (
        <Card>
            <Card.Body>{title}</Card.Body>
        </Card>
    );
};
